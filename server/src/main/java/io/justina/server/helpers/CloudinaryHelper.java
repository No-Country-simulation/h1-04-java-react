package io.justina.server.helpers;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

/**
 * CloudinaryHelper es un componente de Spring que proporciona métodos
 * para subir y eliminar archivos en Cloudinary.
 *
 * Utiliza las credenciales proporcionadas a través de variables de entorno
 * para configurar la conexión con Cloudinary.
 */
@Component
public class CloudinaryHelper {

    private Cloudinary cloudinary;

    @Value("${CLOUDINARY_NAME}")
    private String cloudName;

    @Value("${CLOUDINARY_API_KEY}")
    private String apiKey;

    @Value("${CLOUDINARY_API_SECRET}")
    private String apiSecret;

    /**
     * Inicializa la configuración de Cloudinary con las credenciales proporcionadas.
     * Este método se ejecuta después de la inyección de dependencias.
     */
    @PostConstruct
    public void init() {
        cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret,
                "secure", true
        ));
    }

    /**
     * Sube un archivo a Cloudinary.
     *
     * @param mpf el archivo multipart a subir.
     * @return un mapa con la información del archivo subido.
     * @throws IOException si ocurre un error durante la subida.
     */
    public Map upload(MultipartFile mpf) throws IOException {
        File file = convert(mpf);
        Map result = cloudinary.uploader().upload(file, ObjectUtils.asMap("folder", "documents-images/"));
        file.delete();  // Elimina el archivo temporal después de subirlo.
        return result;
    }

    /**
     * Convierte un MultipartFile en un archivo File.
     *
     * @param multipartFile el archivo multipart a convertir
     * @return el archivo convertido
     * @throws IOException si ocurre un error durante la conversión
     */
    private File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }

    /**
     * Elimina un archivo de Cloudinary.
     *
     * @param id el identificador del archivo a eliminar
     * @return un mapa con el resultado de la eliminación
     * @throws IOException si ocurre un error durante la eliminación
     */
    public Map delete(String id) throws IOException {
        Map result = cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
        return result;
    }

}
