package io.justina.server.services.impl;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import java.io.File;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendHtmlEmail(String toEmail, String emailSubject, String emailBody, String logoPath) throws MessagingException {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(toEmail);
            helper.setSubject(emailSubject);
            helper.setText(emailBody, true);
            helper.setFrom("h104.justina@gmail.com", "Justina\u2764\uFE0F");

            FileSystemResource logo = new FileSystemResource(new File(logoPath));
            helper.addInline("logo", logo);

            javaMailSender.send(message);
        } catch (Exception e) {
            // Handle the exception or log it
            System.err.println("Error sending email: " + e.getMessage());
        }

    }
}