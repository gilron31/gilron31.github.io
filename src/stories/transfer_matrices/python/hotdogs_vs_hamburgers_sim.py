import random

WAITING_TIME_M: int = 1  # one minute
HOTDOG_PEOPLE_FRACTION: float = 0.5  # half of the people want hotdogs
HOTDOG_LOVER: int = 0
HAMBURGER_LOVER: int = 1
DEBUG: bool = False


def dprint(s: str):
    if DEBUG:
        print(s)


class StandsState:
    hotdogs_occupied = False
    hamburgers_occupied = False
    hotdogs_stand_idle_time = 0
    hamburgers_stand_idle_time = 0
    total_time = 0

    def flush(self):
        self.hamburgers_stand_idle_time += (
            not self.hamburgers_occupied
        ) * WAITING_TIME_M
        self.hotdogs_stand_idle_time += (not self.hotdogs_occupied) * WAITING_TIME_M
        self.hotdogs_occupied = False
        self.hamburgers_occupied = False
        self.total_time += WAITING_TIME_M

    def __repr__(self) -> str:
        return f"hotdogs_occupied: {self.hotdogs_occupied}, hamburgers_occupied: {self.hamburgers_occupied}, total_time: {self.total_time}, ,hotdogs_stand_idle_time: {self.hotdogs_stand_idle_time}, hamburgers_stand_idle_time: {self.hamburgers_stand_idle_time}"


def simulate_line(line_length: int):
    # We denote with 0 the people who want hotdogs and with 1 the people who want hamburgers.
    line = [
        (HOTDOG_LOVER if random.random() < HOTDOG_PEOPLE_FRACTION else HAMBURGER_LOVER)
        for i in range(line_length)
    ]

    s = StandsState()
    i = 0

    while len(line) > 0:
        next_person = line.pop()
        if next_person == HOTDOG_LOVER:
            if s.hotdogs_occupied:
                dprint("flush hotdogs")
                s.flush()
            s.hotdogs_occupied = True
        elif next_person == HAMBURGER_LOVER:
            if s.hamburgers_occupied:
                dprint("flush hamburgers")
                s.flush()
            s.hamburgers_occupied = True
        dprint(f"{i=}, {next_person=}, {s=}")
        i += 1

    time_per_person = s.total_time / line_length
    hotdog_idle_ratio = s.hotdogs_stand_idle_time / s.total_time
    hamburger_idle_ratio = s.hamburgers_stand_idle_time / s.total_time
    print(
        f"{line_length=}, {time_per_person=}, {hotdog_idle_ratio=}, {hamburger_idle_ratio=}"
    )


if __name__ == "__main__":
    simulate_line(1000)
    simulate_line(100000)
