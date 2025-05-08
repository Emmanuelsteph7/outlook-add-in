/* global Office */

/**
 * Ensures that the Office JavaScript APIs are ready to be called
 * by the add-in. If the framework hasn't initialized yet,
 * the callback or promise will wait until the Office
 * application is ready to accept API calls. Note that
 * though this API is intended to be used inside an Office
 * add-in, it can also be used outside the add-in.
 * In that case, once Office.js determines that it is
 * running outside of an Office application, it will
 * call the callback and resolve the promise with "null"
 * for both the application and platform.
 */
Office.onReady(() => {
  // If needed, Office.js is ready to be called.
});

function handleAlert(event) {
  console.log("first");
  alert("hello outlook");

  // Always call event.completed() when the function is done.
  event.completed();
}

// Register the function with Office.
Office.actions.associate("handleAlert", handleAlert);
