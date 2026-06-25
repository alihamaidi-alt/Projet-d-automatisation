# Projet-d-automatisation

 j'ai pensé à développer une automatisation sur la plateforme Make pour stocker automatiquement les fichiers PDF de mes cours reçus par e-mail et les classifier automatiquement aussi. L'objectif est de se passer du classement manuel des documents et de permettre une classification automatique et efficace de mes documents en fonction de la langue des cours.

Tout commence avec le module Watch Emails (Outlook et Gmail), qui surveille la boîte de réception et récupère les nouveaux messages ainsi que leurs pièces jointes, tout ça est ensuite retransmis vers un module Code (JavaScript) qui analyse le sujet et le contenu du message afin de déterminer si le cours est rédigé en français ou en anglais. Le résultat est ensuite envoyé à un module Router, qui va répartir ce flux en deux branches (chacune contenant un module Google Drive – Upload a File) selon la langue détectée.

ce module s'occupe de charger automatiquement les fichiers PDF dans le dossier Google Drivee correspondant, les cours en français sont stockés dans un dossier consacré aux documents francophones, et ainsi de suite pour les cours enanglais.
