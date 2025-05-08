function handleAlert(event) {
  console.log("first");
  alert("hello outlook");

  // Always call event.completed() when the function is done.
  event.completed();
}
