document.getElementById("music").src = "music1.wav";
k = 0 //sina ken ante e ni, taso, musi ni li pini la o ante ala e ni
kalamamusi = false
palilon = false
sitelennimi = ["lonwan"]
tokinimi = [
	"IJO PI SUPA JAN",
	"supa jan: ... <br>supa jan: mi supa tan seme?<br>supa jan: ni li lon mi tan seme??",
	"supa jan: mi sona ala... <br>supa jan: mi wile tawa la, mi ken kepeken e nasin seme?",
	"supa jan: a, jan o! <br><jan>jan: seme?",
	"supa jan: sina ken ala ken pana e sike tawa tawa mi? <br>supa jan: mi wile tawa li wile lukin e ma ale!<br><br>supa jan: awen la... mi wile misikeke e jan.",
	"<jan>jan: uuu, mi ken alasa e sike tawa... mi sona ala e jo mi pi sike tawa...", //5
	"<jan>jan: sike tawa li lon ma seme...?",
	"<jan>jan: oke, mi jo e sike tawa. <br><text>supa jan: a, sina pona!",
	"supa jan: ni la, mi ken tawa! <br>supa jan: taso... sike tawa ni li... <br>supa jan: ...jo ala e wawa. <br><br>supa jan: mi wile e sike tawa ante.",
	"<jan>jan: sina wile sike tawa ante la, sina ken alasa e ona kepeken sike tawa. <br><text>supa jan: mi sona, mi sona.",
	"<jan>jan: mi jo e supa pi ken lawa pi ken toki pi ken tawa. <br>jan: ni li lon mi. <br><text>supa jan: o toki ala.", //10
	"supa jan: seme li lon tomo ni? <br>supa jan: seme li ken pana e tawa wawa tawa mi?",
	"supa jan: pona! ni la, mi ken tawa kepeken wawa! <br>supa jan: o tawa tawa mi. mi jo e nasin pona. <br><jan>jan: oke...",
	"<jan>jan: sina wile kepeken tomo telo, anu seme? <br><text>supa jan: ala, ala, mi lukin taso...",
	"supa jan: seme? <br><text>supa jan: mi kepeken e tomo telo tan seme? <br><br><jan>jan: mi sona ala... sina ken kepeken e ni tan... <br><br><text>supa jan: sina nasa lili. <br><jan>jan: mi sona.", //ken la jan ale li nasa lili
	"<jan>jan: a, sina wile tawa tawa ma lon! <br><text>supa jan: lon! o open e lupa. <br><br><jan>jan: ... <br><jan>jan: mi ken ala...", //15
	"<text>supa jan: tan seme? <br><jan>jan: mi jo ala e luka... <br><text>supa jan: ...",
	"<text>supa jan: a... ni li ike. <br>supa jan: ken la mi ken alasa e luka.",
	"",
	"",
	"LIPU NANPA WAN LI PINI", //20
]
palima = [6, 11, 17]
kalamama = [9, 12, 18, 19]

function kama() {
	if(palilon == false) {
		k++
		document.getElementById("s").src = "sitelen\\" + sitelennimi[0] + "\\" + sitelennimi[0] + k + ".png";
		document.getElementById("n").innerHTML = tokinimi[k];
		document.getElementById("nenapali1").innerHTML = "___";
		document.getElementById("nenapali2").innerHTML = "___";
		document.getElementById("nenapali3").innerHTML = "___";
		
		for(i = 0; i < kalamama.length; i++) {
			if(kalamamusi == false || (k == kalamama[i])) {
				if(k == 9) {document.getElementById("music").src = "music2.wav";}
				else if(k == 12) {document.getElementById("music").src = "music3.wav";}
				else if(k == 18) {document.getElementById("music").src = "music1.wav";}
				else if(k == 19) {document.getElementById("music").src = "malon.mp3";}
				else {
					document.getElementById("music").src = "music1.wav";
					kalamamusi = true
				}
			}
		}
		
		for(i = 0; i < palima.length; i++) {
			if(k == palima[i]) paliopen()
		}
	}
	else if(palilon == true) {
		document.getElementById("s").src = "sitelen\\" + sitelennimi[0] + k + ".png";
		document.getElementById("n").innerHTML = tokinimi[k];
	}
}

function paliopen() {
	palilon = true
	if(k == 6) {
		document.getElementById("nenapali1").innerHTML = "o alasa lon lupa";
		document.getElementById("nenapali2").innerHTML = "o alasa lon ilo pi kama lete";
		document.getElementById("nenapali3").innerHTML = "o alasa lon kiwen";
	}
	else if(k == 11) {
		document.getElementById("nenapali1").innerHTML = "o lukin lon lupa";
		document.getElementById("nenapali2").innerHTML = "o lukin lon sitelen nimi";
		document.getElementById("nenapali3").innerHTML = "o lukin lon poki lete";
	}
	else if(k == 17) {
		document.getElementById("nenapali1").innerHTML = "o alasa lon len";
		document.getElementById("nenapali2").innerHTML = "o alasa lon ilo pi suno lili";
		document.getElementById("nenapali3").innerHTML = "o alasa lon lupa";
	}
}

function pali1() {
	if(palilon == true) {
		if(k == 6) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa1.png";
			document.getElementById("n").innerHTML = "<jan>jan: tenpo suno ni li pona. ken la mi tawa. <br>jan: mi ken lukin e soweli e jan e kasi e kon pi telo sewi... <br><br>jan: ... <br>jan: e";
		}
		else if(k == 11) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa1.png";
			document.getElementById("n").innerHTML = "supa jan: mi wile tawa ma lon! <jan><br>jan: a, sina wile ala. <br>jan: ijo ala li lon ma lon. ona li ma pi pilin ala. <text><br><br>supa jan: ... <br>supa jan: oke...";
		}
		else if(k == 17) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa6.png";
			document.getElementById("n").innerHTML = "supa jan: sina jo e ni tan seme...? <jan><br>jan: mi kepeken e ni tan... <br>jan: ...ijo esun. <text><br>supa jan: ... <br>supa jan: mi wile ala sona.";
		}
	}
}

function pali2() {
	if(palilon == true) {
		if(k == 6) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa2.png";
			document.getElementById("n").innerHTML = "<jan>jan: ni li sike tawa... taso, mi ken ala luka e ni. <br>jan: ona li lon ma suli... <br><br>jan: kin la, mi jo ala e luka";
		}
		else if(k == 11) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa4.png";
			document.getElementById("n").innerHTML = "supa jan: sina jo e ni la, sina jan Puma. <jan><br>jan: taso... ni li pona tawa mi. :( <text><br>supa jan: ijo ale li ken pona tawa sina! o lon, kepeken nasin pi pona sina! <jan><br>jan: a, sina pona! <text><br>supa jan: ike ala li lon, jan Puma o! <jan><br><br>jan: ...";
		}
		else if(k == 17) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa7.png";
			document.getElementById("n").innerHTML = "<jan>jan: ilo ni pi suno lili li tan mama mama mi. <text><br>supa jan: mi sona, mi ken lukin. <jan><br><br>jan: sina tan ona kin! <br><text>supa jan: ni la... <jan><br>jan: ... <text><br>supa jan: mi pata pi mama sina? <jan><br>jan: ...ala";
		}
	}
}

function pali3() {
	if(palilon == true) {
		if(k == 6) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa3.png";
			document.getElementById("n").innerHTML = "<jan>jan: ken la, supa jan li ken kepeken e ni... <jan>jan: ken la, supa jan li ken kepeken e ni...  <jan>jan: mi ken jo e ni. ";
			palilon = false
		}
		else if(k == 11) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa5.png";
			document.getElementById("n").innerHTML = "supa jan: a, mi sona. sina jo e sike pi mama waso! <jan><br>jan: ...mi wile kepeken e ni tan moku nanpa wan... <jan><br><br>jan: a, sina ken kepeken e ni. <text><br>supa jan: pona!";
			palilon = false
		}
		else if(k == 17) {
			document.getElementById("s").src = "sitelen\\alasapisiketawa8.png";
			document.getElementById("n").innerHTML = "supa jan: a, lupa ni li jo e nena pi jan pi luka ala!. <jan><br>jan: pona!";
			palilon = false
		}
	}
}