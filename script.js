document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
  
    const nameInput = document.getElementById("nameInput").value.trim();
    const outputDiv = document.getElementById("output");
  
    if (nameInput) {
      // Predefined compliments (keys in lowercase for case-insensitivity)
      const compliments = {
        tushar: "You Are Randi",
        rohit: "You are RohitR",
        harsh: "You are Gutta Badmosh",
        gaurav: "You are Nice Good Man",
        shaurya: "You are Tinku Badmosh",
        aditya: "Chutiya ho tum",
        samyak: "You are darker than buffalo",
        siddhant: "You are a hero",
      };
  
      // Normalize input to lowercase
      const normalizedInput = nameInput.toLowerCase();
  
      // Check if the name exists in the compliments object
      const message =
        compliments[normalizedInput] || `Hello ${nameInput}, you are special!`;
  
      // Display the message
      outputDiv.textContent = message;
      outputDiv.classList.remove("hidden");
    } else {
      alert("Please enter a name!");
    }
  });
  