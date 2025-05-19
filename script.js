const dynamicTextElement = document.getElementById('dynamic-text');
                    const details = [
                        "AnimXcape ",
                        "AnimXcape.official",
                        "Suraj the Creator 🎬",
                        "Cinematic Storyteller 🎥",
                        "Power in Every Voiceover 🎤",
                        "Anime Meets Real Life ✨",
                        "Freelancing with Purpose 💻",
                        "Building Dreams Daily 🏗️",
                        "Creator of AnimXcape 🌀",
                        "Behind AnimXcape.official 🚀",
                        "Hustle. Edit. Inspire. 🔧",
                        "From Village to Visionary 🏡➡️🌟",
                        "Motivating One Reel at a Time 📲",
                        "Emotional Edits, Real Impact 💔🎞️",
                        "Storytelling with Soul 📖💫",
                        "Learning. Creating. Rising. 📚⬆️",
                        "Driven by Passion 💖",
                        "BGM is My Weapon 🎶⚔️",
                        "Underdog with a Mission 🐺🎯",
                        "Typing Life into Words ⌨️📝",
                        "Editing with Emotion 🖌️😢",
                        "Real Hustle, No Filter 💪🔍",
                        "Small Town, Big Dreams 🌆💭",
                        "I Fail, I Rise, I Win ♻️🏆",
                        "Voice that Sparks Fire 🔊🔥",
                        "AnimXcape Energy 💥",
                        "One Man, Many Skills 🧠💼",
                        "Hindi, Marathi, English – My Canvas 🗣️🎨",
                        "Creator by Heart, Learner for Life ❤️📘",
                        "Leveling Up Daily ⬆️📈",
                        "Anime = Life Lessons 🧠🎌",
                        "Revenge Scenes Hit Hard ⚔️💣",
                        "Motivating Otakus Everyday 👊👓",
                        "Suraj = Consistency + Fire 🔁🔥",
                        "Not Just Content, It's Cinema 🎬🌌",
                        "Work in Silence, Drop Reels Loud 🤫🎞️",
                        "BGM + Dialogue = Goosebumps 😳🎧",
                        "Late Nights, Loud Visions 🌙💡",
                        "Crafting Vibes, Not Just Videos 🧩📽️",
                        "Teen Creator, Grown Vision 👦➡️👑",
                        "Real Emotion, Real Impact 💯💥",
                        "Edit. Sync. Inspire. Repeat. 🔄🎼",
                        "Made with Emotion, Shared with Fire 💓🔥",
                        "From Keyboard to Camera ⌨️📸",
                        "My Hustle Speaks Louder 🏃📢",
                        "100+ Skills, 1 Creator 🧠🎯",
                        "Real Stories. Raw Energy 🎙️⚡",
                        "Built From Scratch 🧱🛠️",
                        "Dream, Script, Execute 💭✍️🎬",
                        "Freelance Mode: ON 💼🟢",
                        "Next Gen Motivation ⚡🧠",
                        "One Creator, Many Universes 🌍🔁",

                        "Fueling Passion through Content",
                        "Dream, Create, Inspire",
                        "Your Future, Your Story"
                    ];
                    let currentIndex = 0;
                    let typingSpeed = 150;
                    const baseFontSize = '3rem';
                    const minFontSize = '1.5rem';
                    const longTextThreshold = 30; // Text length beyond which scaling starts

                    function changeDetail() {
                        const currentText = details[currentIndex];
                        dynamicTextElement.textContent = "";
                        dynamicTextElement.style.color = '#FFD700';
                        dynamicTextElement.style.borderRight = ".15em solid orange";
                        dynamicTextElement.style.fontSize = baseFontSize;

                        let charIndex = 0;
                        let targetFontSize = baseFontSize;

                        if (currentText.length > longTextThreshold) {
                        const textLengthRatio = currentText.length / 60; // Adjust for scaling intensity
                        targetFontSize = Math.max(parseFloat(baseFontSize) - (textLengthRatio * 0.8) + 'rem', minFontSize); // Adjust scaling factor
                        }

                        function typeWriter() {
                        if (charIndex < currentText.length) {
                            dynamicTextElement.textContent += currentText.charAt(charIndex);
                            charIndex++;
                            // Gradually decrease font size during typing for long text
                            if (currentText.length > longTextThreshold) {
                            const currentRatio = charIndex / currentText.length;
                            const currentFontSize = parseFloat(baseFontSize) - (parseFloat(baseFontSize) - parseFloat(targetFontSize)) * currentRatio;
                            dynamicTextElement.style.fontSize = currentFontSize + 'rem';
                            }
                            setTimeout(typeWriter, typingSpeed);
                        } else {
                            dynamicTextElement.style.borderRight = "none";
                            setTimeout(() => {
                            dynamicTextElement.style.color = '#FFFFFF';
                            setTimeout(() => {
                                currentIndex = (currentIndex + 1) % details.length;
                                changeDetail();
                            }, 1500);
                            }, 500);
                        }
                        }

                        typeWriter();
                    }

                    changeDetail();
                


                const projectBoxes = document.querySelectorAll('#projects .project-box');

                function checkInView() {
                    projectBoxes.forEach(box => {
                        const rect = box.getBoundingClientRect();
                        const isVisible = (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) ||
                                        (rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight));

                        if (isVisible) {
                            box.classList.add('active');
                        } else {
                            box.classList.remove('active');
                        }
                    });
                }

                window.addEventListener('scroll', checkInView);
                window.addEventListener('resize', checkInView); // Also check on resize for better responsiveness
                checkInView(); // Initial check when the page loads
            




            // Optional: You can keep the share functionality if needed
            document.addEventListener('DOMContentLoaded', () => {
                const shareButtons = document.querySelectorAll('.share-btn');

                shareButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const imgElement = button.closest('.gallery-item').querySelector('img');
                        if (navigator.share && imgElement) {
                            navigator.share({
                                title: 'Shared Image',
                                url: imgElement.src
                            })
                            .then(() => console.log('Successful share'))
                            .catch((error) => console.log('Error sharing', error));
                        } else {
                            alert('Web Share API is not supported in this browser, or image source is not available.');
                        }
                    });
                });
            });
        


            document.addEventListener('DOMContentLoaded', function() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        } else {
                            entry.target.classList.remove('visible');
                        }
                    });
                }, {
                    threshold: 0.1
                });

                const animatedElements = document.querySelectorAll('.support-box');
                animatedElements.forEach(element => {
                    observer.observe(element);
                });
            });
        


            function showSection(sectionId) {
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    section.style.display = 'none';
                });
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            }

            // Initially show the dashboard section
            showSection('dashboard');

            const searchInput = document.getElementById('searchInput');
            const searchSuggestions = document.getElementById('searchSuggestions');

            // Function to extract relevant text content from a section and its sub-elements
            function getTextContent(selector) {
                const elements = document.querySelectorAll(selector);
                let content = '';
                elements.forEach(el => {
                    content += el.textContent + ' ';
                });
                return content.trim().toLowerCase();
            }

            // Function to score and rank search results based on relevance
            function getMatchScore(content, searchTerm) {
                const lowerContent = content.toLowerCase();
                const lowerSearchTerm = searchTerm.toLowerCase();
                let score = 0;

                // Score based on how much of the search term matches
                if (lowerContent.includes(lowerSearchTerm)) {
                    score += lowerContent.split(lowerSearchTerm).length - 1; // Increment score based on number of matches
                }

                return score;
            }

            searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    searchSuggestions.innerHTML = ''; // Clear previous suggestions

    if (searchTerm.length > 0) {
        const allContent = [
            { title: 'Profile - About', content: getTextContent('#profile .profile-box:first-child'), section: 'profile' },
            { title: 'Profile - Journey', content: getTextContent('#profile .profile-box:nth-child(2)'), section: 'profile' },
            { title: 'Profile - Skills', content: getTextContent('#profile .skills-box'), section: 'profile' },
            { title: 'Projects', content: getTextContent('#projects'), section: 'projects' },
            { title: 'Quotes', content: getTextContent('#quotes'), section: 'quotes' },
            { title: 'Gallery', content: getTextContent('#gallery'), section: 'gallery' },
            { title: 'Support', content: getTextContent('#support'), section: 'support' },

            ...Array.from(document.querySelectorAll('#projects h2, #projects .project-item')).map(el => ({
                title: 'Project: ' + el.textContent.trim(),
                content: el.textContent.trim().toLowerCase(),
                section: 'projects'
            })),
            ...Array.from(document.querySelectorAll('#quotes h2, #quotes blockquote')).map(el => ({
                title: 'Quote: ' + el.textContent.trim(),
                content: el.textContent.trim().toLowerCase(),
                section: 'quotes'
            })),
            ...Array.from(document.querySelectorAll('#gallery h2, #gallery .gallery-item')).map(el => ({
                title: 'Gallery Item: ' + el.textContent.trim(),
                content: el.textContent.trim().toLowerCase(),
                section: 'gallery'
            })),
            ...Array.from(document.querySelectorAll('#profile .skills-list li')).map(el => ({
                title: 'Skill: ' + el.textContent.trim(),
                content: el.textContent.trim().toLowerCase(),
                section: 'profile'
            })),
            ...Array.from(document.querySelectorAll('#support .support-item')).map(el => ({
                title: 'Support: ' + el.textContent.trim(),
                content: el.textContent.trim().toLowerCase(),
                section: 'support'
            }))



        ];

        // Function to calculate match score based on keyword occurrences
        function getMatchScore(content, term) {
            const termRegex = new RegExp(term, 'g'); // Case insensitive matching
            const matchCount = (content.match(termRegex) || []).length;
            return matchCount; // Return the number of occurrences
        }

        // Function to calculate relevance by checking term proximity and frequency
        function calculateRelevance(content, term) {
            if (content.includes(term)) {
                return content.split(term).length - 1; // Count term occurrence in content
            }
            return 0;
        }

        // Filter and score results based on match
        const filteredResults = allContent.map(item => ({
            ...item,
            score: calculateRelevance(item.content, searchTerm)
        }))
        .filter(item => item.score > 0)  // Only include results with matches
        .sort((a, b) => b.score - a.score); // Sort by relevance (highest score first)

        // Display filtered and sorted results
        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `${result.title}: ${result.content.substring(0, 50)}...`;
                li.addEventListener('click', function() {
                    searchInput.value = result.title;
                    searchSuggestions.style.display = 'none';
                    showSection(result.section); // Navigate to the relevant section
                });
                searchSuggestions.appendChild(li);
            });
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    } else {
        searchSuggestions.style.display = 'none';
    }
    });
    
    // Close suggestions when clicking outside the search box
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = 'none';
        }
    });

    // Prevent the page from scrolling when the Enter key is pressed
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (scrolling or form submission)
            const firstSuggestion = searchSuggestions.querySelector('li');
            if (firstSuggestion) {
                firstSuggestion.click(); // Trigger the click event on the first suggestion
            }
        }
    });


    // Close suggestions when clicking outside the search box
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = 'none';
        }
    });

    // Prevent the page from scrolling when the Enter key is pressed
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (scrolling or form submission)
            const firstSuggestion = searchSuggestions.querySelector('li');
            if (firstSuggestion) {
                firstSuggestion.click(); // Trigger the click event on the first suggestion
            }
        }
    });