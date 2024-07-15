package io.justina.server.enumerations;

import lombok.Getter;
import lombok.ToString;
import java.time.LocalTime;

@Getter
@ToString
public enum Schedules {
    SEVEN_AM(LocalTime.of(7, 0)),
    EIGHT_AM(LocalTime.of(8, 0)),
    TEN_AM(LocalTime.of(10, 0)),
    TWELVE_PM(LocalTime.of(12, 0)),
    TWO_PM(LocalTime.of(14, 0)),
    FOUR_PM(LocalTime.of(16, 0)),
    SIX_PM(LocalTime.of(18, 0));

    private final LocalTime time;

    Schedules(LocalTime time) {
        this.time = time;
    }

}
