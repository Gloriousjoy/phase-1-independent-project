const loadFact = ()=>{
    document.getElementById("sendNumber").addEventListener("click", async(e)=>{
         e.preventDefault
         const inputValue = document.querySelector("#numbers").value
         const fetchNumbers =  await fetch (`http://numbersapi.com/${inputValue}`)
         const fetchedNumbers = await fetchNumbers.text()
         document.querySelector("#numbers").value
         document.getElementById("receive-number").innerText= fetchedNumbers
      })
    }