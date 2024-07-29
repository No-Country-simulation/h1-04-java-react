package io.justina.server.exceptions;

public class DoctorNotAvailableException extends ConflictException {

    public DoctorNotAvailableException(String message) {
        super(message);
    }

}