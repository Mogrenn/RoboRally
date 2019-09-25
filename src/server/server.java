package server;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.LinkedList;

public class server {
	
	private static int port;
	
	public server(int port) throws IOException{
		
		server.port = port;
		Socket sock = null;
		
		LinkedList<Socket> connections = new LinkedList<Socket>();
		
		ServerSocket socket = new ServerSocket(server.port);
		
		while(true) {
			
			sock = socket.accept();
			
		}
	}
	

}
