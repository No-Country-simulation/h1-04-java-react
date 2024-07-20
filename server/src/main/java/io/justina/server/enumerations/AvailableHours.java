package io.justina.server.enumerations;

import lombok.Getter;
import lombok.ToString;
import java.time.LocalTime;

@Getter
@ToString
public enum AvailableHours {

    SEVEN_AM(LocalTime.of(7, 0)),
    EIGHT_AM(LocalTime.of(8, 0)),
    NINE_AM(LocalTime.of(9, 0)),
    TEN_AM(LocalTime.of(10, 0)),
    ELEVEN_AM(LocalTime.of(11, 0)),
    TWELVE_PM(LocalTime.of(12, 0)),
    TWO_PM(LocalTime.of(14, 0)),
    FOUR_PM(LocalTime.of(16, 0)),
    SIX_PM(LocalTime.of(18, 0));

    private final LocalTime time;

    AvailableHours(LocalTime time) {
        this.time = time;
    }

}
