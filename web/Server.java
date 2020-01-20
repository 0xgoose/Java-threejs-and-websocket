import java.io.IOException;
import java.io.PrintWriter;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;
import java.util.Scanner;


/**
 * A simple TCP server. When a client connects, it sends the client the current
 * datetime, then closes the connection. This is arguably the simplest server
 * you can write. Beware though that a client has to be completely served its
 * date before the server will be able to handle another client.
 */
public class Server {
    public static void main(final String[] args) throws IOException {
        try (ServerSocket listener = new ServerSocket(59091)) {
            System.out.println("The date server is running...");
            Scanner in;
            while (true) {
                try (Socket socket = listener.accept()) {
                    final PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                    in = new Scanner(socket.getInputStream());
                    System.out.println(in.next());
                    while(in.hasNextLine()) {
                        System.out.println(in.nextLine());
                    }
                    //System.out.println(in.());
                    //out.println(new Date().toString());
                }
            }
        }
    }
}
