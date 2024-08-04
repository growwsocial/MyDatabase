 var ordersCompleted = 27826;
    var onlineUsers = 340000 + Math.floor(Math.random() * 10000);
    var lastOrderTime = 8; // Initialize last order time starting value
    var totalOrders = 2500000 + Math.floor(Math.random() * 5000);
    var users = 4392; // Initialize users starting value
    
    function startTime() {
        // Randomly adjust values if conditions are met
        if (Math.random() > 0.5) onlineUsers = 100 + Math.floor(Math.random() * 20);
        if (Math.random() > 0.5) totalOrders += Math.floor(Math.random() * 3);
        
        // Update the DOM
        document.getElementById('lastord').innerHTML = "Last order:<br>" + lastOrderTime + " seconds ago";
        document.getElementById('online').innerHTML = "Online: " + onlineUsers;
        document.getElementById('order').innerHTML = "Total Orders:<br>" + ordersCompleted;
        document.getElementById('user').innerHTML = "Users:<br>" + users;
        
        // Increment orders completed by 14 every second
        ordersCompleted += 14;
        // Increment users by 1 every 0.5 seconds
        users += 1;

        // Update last order time
        lastOrderTime += 1;
        // Reset last order time after 5 seconds
        if (lastOrderTime > 8 + 5) lastOrderTime = 0;

        // Call startTime again after 1000 milliseconds (1 second)
        setTimeout(startTime, 1000);
    }

    // Initialize the script
    startTime();
