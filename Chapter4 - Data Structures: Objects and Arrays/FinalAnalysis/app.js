/*
  ! we need to compute a correlation for every type of event that occurs in the data set
  !to do that, we first need to FIND every type of event
*/

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journal.events(JOURNAL));   // -> ["carrot" etc...]

