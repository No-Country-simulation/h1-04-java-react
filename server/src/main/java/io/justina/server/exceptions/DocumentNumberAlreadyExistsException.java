package io.justina.server.exceptions;

public class DocumentNumberAlreadyExistsException extends RuntimeException {

    public DocumentNumberAlreadyExistsException(String message) {
        super(message);
    }

}
