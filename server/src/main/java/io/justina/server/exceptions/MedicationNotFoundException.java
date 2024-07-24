package io.justina.server.exceptions;

public class MedicationNotFoundException extends RuntimeException {

    public MedicationNotFoundException(String message) {
        super(message);
    }

}
