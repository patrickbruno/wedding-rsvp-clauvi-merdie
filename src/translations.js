/**
 * UI strings in German + English.
 * Day-specific content (dates, venue, schedule) lives in config.js;
 * this file only holds reusable interface copy.
 */

export const translations = {
  de: {
    langName: 'DE',
    switchTo: 'EN',

    hero: {
      kicker: 'Wir heiraten',
      and: '&',
      save: 'Save the Date',
      scroll: 'Mehr erfahren',
    },

    countdown: {
      title: 'Es sind noch',
      days: 'Tage',
      hours: 'Std',
      minutes: 'Min',
      seconds: 'Sek',
      married: 'Wir haben geheiratet!',
    },

    details: {
      title: 'Der Tag',
      whenLabel: 'Wann',
      whereLabel: 'Wo',
      openMaps: 'In Karte öffnen',
      addCalendar: 'Zum Kalender hinzufügen',
    },

    gallery: {
      title: 'Die Location',
    },

    schedule: {
      title: 'Ablauf',
      tentativeNote: 'Der Ablauf steht noch nicht endgültig fest und kann sich noch ändern.',
    },

    rsvp: {
      title: 'Zusagen',
      intro: 'Bitte sag uns bis zum {deadline} Bescheid, ob du dabei bist.',
      introNoDeadline: 'Bitte sag uns Bescheid, ob du dabei bist.',
      attendingLabel: 'Bist du dabei?',
      yes: 'Ja, ich komme',
      no: 'Leider nicht',
      nameLabel: 'Wer kommt?',
      namePlaceholder: 'Dein Name',
      plusOneLabel: 'Bringst du jemanden mit?',
      plusOneYes: 'Ja',
      plusOneNo: 'Nein',
      plusOneNameLabel: 'Name der Begleitung',
      plusOneNamePlaceholder: 'Name deiner Begleitung',
      phoneLabel: 'Telefonnummer',
      phonePlaceholder: 'z. B. +49 170 1234567',
      messageLabel: 'Kommentar / Nachricht',
      messagePlaceholder: 'Möchtest du uns etwas mitteilen?',
      submit: 'Antwort senden',
      submitting: 'Wird vorbereitet …',
      sentTitle: 'Fast geschafft!',
      sentBody: 'Dein E-Mail-Programm wurde geöffnet. Bitte schicke die fertige E-Mail noch ab, damit deine Antwort bei uns ankommt.',
      sentAgain: 'Noch eine Antwort senden',
      requiredName: 'Bitte gib deinen Namen an.',
      mailSubject: 'Zusage zur Hochzeit von {names}',
    },

    footer: {
      madeWith: 'Mit Liebe gemacht',
      seeYou: 'Wir freuen uns auf dich',
    },
  },

  en: {
    langName: 'EN',
    switchTo: 'DE',

    hero: {
      kicker: "We're getting married",
      and: '&',
      save: 'Save the Date',
      scroll: 'Learn more',
    },

    countdown: {
      title: 'Only',
      days: 'days',
      hours: 'hrs',
      minutes: 'min',
      seconds: 'sec',
      married: "We're married!",
    },

    details: {
      title: 'The Day',
      whenLabel: 'When',
      whereLabel: 'Where',
      openMaps: 'Open in Maps',
      addCalendar: 'Add to calendar',
    },

    gallery: {
      title: 'The Venue',
    },

    schedule: {
      title: 'Schedule',
      tentativeNote: 'The schedule is not final yet and may still change.',
    },

    rsvp: {
      title: 'RSVP',
      intro: 'Please let us know by {deadline} whether you can join us.',
      introNoDeadline: 'Please let us know whether you can join us.',
      attendingLabel: 'Will you be there?',
      yes: "Yes, I'll be there",
      no: "Sorry, can't make it",
      nameLabel: 'Who is coming?',
      namePlaceholder: 'Your name',
      plusOneLabel: 'Do you bring someone else?',
      plusOneYes: 'Yes',
      plusOneNo: 'No',
      plusOneNameLabel: "Guest's name",
      plusOneNamePlaceholder: "Your guest's name",
      phoneLabel: 'Phone number',
      phonePlaceholder: 'e.g. +49 170 1234567',
      messageLabel: 'Comment / message',
      messagePlaceholder: 'Anything you want to tell us?',
      submit: 'Send response',
      submitting: 'Preparing …',
      sentTitle: 'Almost done!',
      sentBody: 'Your email app has been opened. Please send the prepared email so your response reaches us.',
      sentAgain: 'Send another response',
      requiredName: 'Please enter your name.',
      mailSubject: 'Wedding RSVP from {names}',
    },

    footer: {
      madeWith: 'Made with love',
      seeYou: "We can't wait to see you",
    },
  },
}

export default translations
