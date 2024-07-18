package io.justina.server.controllers;

import io.justina.server.helpers.ImageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

/**
 * ImageController es un controlador REST de Spring que proporciona
 * un endpoint para subir imágenes a través de la API.
 *
 * Utiliza ImageHelper para manejar la lógica de la subida de imágenes.
 */
@RestController
@RequestMapping("v1/api/images")
public class ImageController {

    @Autowired
    private ImageHelper imageHelper;

    /**
     * Endpoint para subir una imagen.
     *
     * @param mpf el archivo multipart de la imagen a subir.
     * @return una ResponseEntity con la URL de la imagen subida o un mensaje de error.
     * @throws IOException si ocurre un error durante la subida.
     */
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile mpf) throws IOException {
        if(mpf.isEmpty()){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(imageHelper.save(mpf));
    }

}
