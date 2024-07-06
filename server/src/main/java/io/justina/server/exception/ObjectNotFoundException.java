package io.justina.server.exception;

public class ObjectNotFoundException extends RuntimeException{

    public ObjectNotFoundException(){
    }

    public ObjectNotFoundException(String message) {
        super(message);
    }

}

