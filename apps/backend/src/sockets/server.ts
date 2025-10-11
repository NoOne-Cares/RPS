// socketServer.ts
import type { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

const playerSocketMap = new Map<string, string>();


export const startSocketServer = (server: HttpServer) => {
    const io = new IOServer(server, {
        cors: {
            origin: "*",
        },
    });

    io.on('connection', (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);

        const userId = socket.handshake.query.userId as string;;

        if (userId) playerSocketMap.set(userId, socket.id)


        socket.on('disconnect', () => {
            for (const [playerId, sock] of playerSocketMap.entries()) {
                if (sock === socket.id) {
                    playerSocketMap.delete(playerId);
                    console.log(`Removed player ${playerId} from socket map`);
                    break;
                }
            }
        });
    });
};

export const findSocketByUserId = (publicKey: string): string | undefined => {
    return playerSocketMap.get(publicKey);
};