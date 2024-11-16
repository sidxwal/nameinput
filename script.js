document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
  
    const nameInput = document.getElementById("nameInput").value.trim();
    const outputDiv = document.getElementById("output");
  
    if (nameInput) {
      // Predefined compliments (keys in lowercase for case-insensitivity)
      const compliments = {
        tushar: "",
        rohit: "Tu asli haathi ka dant hai, dekhne mein acha, kaam mein zero!",
        harsh: "oo it wale oo bhosdi wale",
        gaurav: "You are Nice Gendu",
        shaurya: "Teri toh aakhn kabhi khulti hi nahi h, hmesha sota rhta h",
        aditya: "aree yaar wo toh rand hai",
        samyak: "juice pilado mausambi ka",
        siddhant: "Feku master, tera naatak toh world-famous hai!",
      };
  
      // Normalize input to lowercase
      const normalizedInput = nameInput.toLowerCase();
  
      // Check if the name exists in the compliments object
      const message =
        compliments[normalizedInput] || `Hello ${nameInput}, you are not in the list , go back to pakistan.`;
  
      // Display the message
      outputDiv.textContent = message;
      outputDiv.classList.remove("hidden");
    } else {
      alert("Please enter a name!");
    }
  });
  