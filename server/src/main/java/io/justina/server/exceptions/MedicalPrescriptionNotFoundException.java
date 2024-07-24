package io.justina.server.exceptions;

public class MedicalPrescriptionNotFoundException extends RuntimeException {

    public MedicalPrescriptionNotFoundException(String message) {
        super(message);
    }

}
