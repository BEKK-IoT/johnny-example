# johnny-example

Dette er bare node koden jeg har brukt for å teste johnny-five på raspberry, pluss oppskrift for å få det opp.

# SD-kort image
http://blog.hypriot.com/

# Docker Image
Jeg brukte dette image her som base: https://registry.hub.docker.com/u/acencini/rpi-python-serial-wiringpi/
Kjørte opp imaget med kommandoen under. Dette var for å kunne gi tilgang til det som trengs for å kjøre johnnyfive med raspi-io. 

```docker run --device /dev/mem:/dev/mem -v /lib/modules:/lib/modules --cap-add=ALL  --privileged -ti snorlock/node-gpio /bin/bash```

La inn node slik: http://weworkweplay.com/play/raspberry-pi-nodejs/
Da er du klar til å installere johnny-five og hacke løs.

Jeg har et image lokalt jeg kan pushe opp, men det blir ikke riktig måte å utnytte docker på, føler jeg.

# Koden
Koden er veldig simpel, fulgte bare arduino eksemplene for å teste forskjellige ting.

# Tanker
Vi må klare å benytte dockerfile i et repo. Har ikke sett på det, men det er nok bare å skrive ut hva som skal være tilgjenglig.
Det er en dypere docker læring.
Vi må også se på hvordan det er å dele opp containerene, om det er vits.
Må se litt på hvordan det er å utvikle til så det blir greit for elevene også.

