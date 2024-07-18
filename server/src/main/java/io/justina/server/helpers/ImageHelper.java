package io.justina.server.helpers;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Map;

/**
 * ImageHelper es un componente de Spring que proporciona métodos
 * para manejar imágenes, incluyendo la subida a Cloudinary.
 *
 * Utiliza CloudinaryHelper para gestionar la subida de archivos a Cloudinary.
 */
@Component
@AllArgsConstructor
public class ImageHelper  {

    private final CloudinaryHelper cloudinaryHelper;

    /**
     * Guarda una imagen en Cloudinary.
     *
     * @param mpf el archivo multipart de la imagen a subir.
     * @return la URL de la imagen subida o un mensaje indicando que no hay imagen disponible.
     */
    public String save(MultipartFile mpf){
        if(isImageNotNull(mpf)){
            try {
                BufferedImage bufferedImage = ImageIO.read(mpf.getInputStream());
                Map result = cloudinaryHelper.upload(mpf);
                return result.get("url").toString();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            return "No hay imagen disponible";
        }

    }

    /**
     * Verifica si el archivo multipart de la imagen no es nulo y no está vacío.
     *
     * @param mpf el archivo multipart a verificar.
     * @return true si el archivo no es nulo y no está vacío, false en caso contrario.
     */
    private boolean isImageNotNull(MultipartFile mpf) {
        return mpf != null && !mpf.isEmpty();
    }

}
