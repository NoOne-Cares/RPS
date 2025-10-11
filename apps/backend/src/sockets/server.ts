// socketServer.ts
import type { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

const playerSocketMap: Record<string, Socket> = {};

export const startSocketServer = (server: HttpServer) => {
    const io = new IOServer(server, {
        cors: {
            origin: "*",
        },
    });

    io.on('connection', (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);


        socket.on('join', (playerId: string) => {
            playerSocketMap[playerId] = socket;
            console.log(`Player ${playerId} joined with socket ID ${socket.id}`);
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
            // Remove from map
            for (const [playerId, sock] of Object.entries(playerSocketMap)) {
                if (sock.id === socket.id) {
                    delete playerSocketMap[playerId];
                    break;
                }
            }
        });
    });
};

export const findSocketId = (publicKey: string): Socket => {
    return playerSocketMap[publicKey]
}