package io.justina.server.exceptions;

public class MedicalPrescriptionAlreadyAssignedException extends RuntimeException {

    public MedicalPrescriptionAlreadyAssignedException(String message) {
        super(message);
    }

}

