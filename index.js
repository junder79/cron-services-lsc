
const serviceCron = async () => {

    try {
        const fetchCron = await fetch("https://los-santos-cars-api.onrender.com/validateNews" ,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
        const responseData = await fetchCron.json();
        console.log(responseData);  
    } catch (error) {
        console.log("Error al ejecutar el cron ", error);
    }
}

serviceCron();