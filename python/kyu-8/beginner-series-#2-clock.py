def past(h, m, s):
		secondsIn_ms = 1000 * s
		minutesIn_ms = 1000 * 60 * m
		hoursIn_ms = 1000 * 60 * 60 * h
		result = secondsIn_ms + minutesIn_ms + hoursIn_ms
		
		return result