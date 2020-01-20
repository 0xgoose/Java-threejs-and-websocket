# Java-threejs-and-websocket<br>
built on win8<br>
first upload test<br>
------------------<br>
Cel:	zrobić prostą aplikację imitującą tryb multiplayer
	oparty na serwerze napisanym w java (bez springów itp)
	przy użyciu js, a konkretnie three.js. To będą proste
	obiekty typu box, ważniejsze jest po prostu zbudowanie
	prostego serwera który ma zbierać dane na temat pozycji
	użytkownika, obsługa wielu użytkowników na mapie. Być
	może potem będzie można dodać inne obiekty jak pociski,
	jakieś przeszkody itd. Ale najpierw trzeba zrobić
	prostą wersję która będzie działać. Jeśli chodzi o 
	użycie three.js to dlatego że ciekawsza jest scena 3D
	i aplikacja przypominająca FPS. Do tej pory nie robiłem
	nawet prostej aplikacji tego typu. To nie jest jakieś
	wyzwanie dla mnie, kwestia zmobilizowania się żeby to
	napisać, z tym jest niestety ciężej u mnie teraz ;/<br>
	Pytanie, ile czasu zajmie mi ogarnięcie tego 'prostego
	tematu' ?! 
	<br>
	<br>
	Ok, coś między czasie zrobiłem, ale jest problem z 
	odczytywaniem POST skanerem. Wypisuje tylko jedną linie
	i koniec, dopiero odświeżenie strony wysyła kolejne
	informacje. W konsoli przeglądarki (F12) widać że przy
	naciskaniu kalwisza jest ciągle wysyłana informacja
	metodą POST. Więc problem leży po stronie serwera. Jest
	źle napisany. Akurat ten fragment kodu pisałem na Ubuntu.
	I tam też testowałem. Teraz przełączyłem sie na Win8,
	i widzę kolejny błąd.
	<br>
	Zablokowano żądanie do zasobu innego pochodzenia: zasady 
	„Same Origin Policy” nie pozwalają wczytywać zdalnych zasobów 
	z „http://localhost:59091/” (nieudane żądanie CORS).
	<br>
	Przez co w ogóle nie dostaję komunikatów na serwer, tj w
	konsoli tak jak to było na Ubuntu. Ale w sumie już nie
	wiem czy czegoś nie pozmieniałem teraz w kodzie. Jeszcze
	raz trzeba to będzie sprawdzić na Ubuntu. 
	W każdym razie serwer nie odbiera komunikatów z danymi
	tak jak tego oczekiwałem, że przy każdym wciśnięciu 
	klawisza będzie wysłane coś na serwer, a tam na bieżąco
	samo będzie wyświetlało kolejne linie tej wiadomości.
	Ale tak się nie dzieje...
	<br>
	<br>
	Ok, chyba rozwiązałem problem. Chyba dlatego że to połaczenie
	TCP potrzebna była odpowiedź od aplikacji, czyli dodałem 
	po metodzie POST metodę GET, która odbiera coś tam od serwera
	i dzięki temu pętla działa jak powinna. Są lagi, ale dobra,
	wazne że coś działa. Teraz tylko napisać na szybko serwer
	oparty na thread, thread pool itd. Potem trzeba będzie 
	przerobić, a właściwie dopisać metody i funkcje które będą
	tworzyły obiekty i zmieniały pozycje na scenie. Ale po kolei.
	
