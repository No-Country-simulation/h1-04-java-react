package io.justina.server.exceptions;

public class PatientNotAvailableException extends ConflictException {

    public PatientNotAvailableException(String message) {
        super(message);
    }

}
