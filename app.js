// Application logic for VocabBoard

// Curated motivational and time-valuing quotes for Liz (one for each day of the month)
const LIZ_MOTIVATIONAL_QUOTES = [
    "El secreto para salir adelante es comenzar. ¡Tú puedes, Liz!",
    "No cuentes los días, Liz. Haz que los días cuenten.",
    "El valor del tiempo es el valor de la vida. ¡Aprovéchalo al máximo, Liz!",
    "Poco a poco se llega muy lejos. ¡Confía en ti y en tu proceso, Liz!",
    "El aprendizaje es un tesoro que seguirá a su dueño a todas partes. ¡Sigue brillando, Liz!",
    "Haz de cada día tu obra maestra de aprendizaje. ¡Vamos, Liz!",
    "La constancia es el puente entre tus metas y tus logros. ¡Hoy es tu día, Liz!",
    "Un paso a la vez, Liz. El éxito es la suma de pequeños esfuerzos diarios.",
    "Valora tu tiempo hoy; es la semilla del éxito de tu mañana. ¡Adelante, Liz!",
    "Aprender algo nuevo es encender una luz en tu mente. ¡Que tu luz brille hoy, Liz!",
    "La perseverancia siempre supera al talento natural. ¡Sigue esforzándote, Liz!",
    "El tiempo vuela, Liz, pero tú eres la piloto. ¡Vuela alto hoy!",
    "El éxito no llega por suerte, Liz. Llega por tu constancia y trabajo duro.",
    "Tu único límite real es tu propia mente. ¡Demuestra tu poder hoy, Liz!",
    "Estudiar hoy es cosechar frutos de sabiduría y libertad mañana. ¡Tú puedes, Liz!",
    "La paciencia y el tiempo logran más que la fuerza bruta. ¡Paso a paso, Liz!",
    "La educación es tu superpoder para cambiar tu mundo. ¡Sigue creciendo, Liz!",
    "El momento perfecto para empezar no existe, el momento es HOY. ¡A por ello, Liz!",
    "El esfuerzo que haces hoy será la tranquilidad de tu futuro. ¡Cree en ti, Liz!",
    "Cada palabra nueva que aprendes es una oportunidad más. ¡Sigue coleccionando éxitos, Liz!",
    "La disciplina te llevará a donde la simple motivación no llegue. ¡Fuerza hoy, Liz!",
    "Si puedes soñarlo, puedes lograrlo con trabajo diario. ¡Mantén el enfoque, Liz!",
    "El camino al éxito se construye con constancia. ¡A por un día súper productivo, Liz!",
    "Invierte tiempo en ti misma: es la mejor inversión de tu vida. ¡Mucho éxito hoy, Liz!",
    "El conocimiento abre puertas que el dinero no puede. ¡Sigue abriendo caminos, Liz!",
    "Disfruta del hermoso proceso de aprender cosas nuevas. ¡Tu curiosidad es genial, Liz!",
    "No te detengas hasta que te sientas completamente orgullosa. ¡Vamos con todo hoy, Liz!",
    "El tiempo bien empleado es el mayor de los tesoros. ¡Haz que hoy cuente, Liz!",
    "Haz hoy algo de lo que tu 'yo' del futuro se sienta sumamente agradecido. ¡Tú puedes, Liz!",
    "El éxito consiste en mantener el entusiasmo a través de los retos. ¡Mucho ánimo hoy, Liz!",
    "Cree firmemente en tu potencial y verás que todo es posible. ¡Eres increíble, Liz!"
];

// Default sample cards formatted as SVG Data URLs
const DEFAULT_CARDS = [
    {
        id: 'default-1',
        word: 'pot',
        pronunciation: '/pɒt/',
        translation: 'olla',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" fill="%23131b2e"/><circle cx="100" cy="115" r="50" fill="%2338bdf8" opacity="0.8"/><rect x="80" y="55" width="40" height="10" rx="3" fill="%230284c7"/><path d="M50 115C50 75 150 75 150 115C150 155 50 155 50 115Z" fill="%230284c7"/><rect x="40" y="90" width="120" height="12" rx="4" fill="%2338bdf8"/><path d="M40 96H25C20 96 20 110 25 110H40" stroke="%2338bdf8" stroke-width="6" stroke-linecap="round"/><path d="M160 96H175C180 96 180 110 175 110H160" stroke="%2338bdf8" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="115" r="10" fill="%23070b19"/></svg>',
        video1: 'https://www.youtube.com/watch?v=Rskg5eG0rM0',
        video2: 'https://www.youtube.com/watch?v=9g0H2gKq9X4',
        learned: false
    },
    {
        id: 'default-2',
        word: 'apple',
        pronunciation: '/ˈæpl/',
        translation: 'manzana',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" fill="%23131b2e"/><circle cx="100" cy="110" r="45" fill="%23ef4444" opacity="0.85"/><path d="M100 110C90 100 80 110 80 125C80 145 100 155 100 155C100 155 120 145 120 125C120 110 110 100 100 110Z" fill="%23ef4444"/><path d="M100 65C100 65 110 50 125 50C125 50 120 70 100 75V65Z" fill="%2322c55e"/><path d="M96 68C98 62 105 55 110 52" stroke="%2378350f" stroke-width="6" stroke-linecap="round"/></svg>',
        video1: 'https://www.youtube.com/watch?v=j9_t_p1p_N0',
        video2: 'https://www.youtube.com/watch?v=9P8c792_yM0',
        learned: false
    },
    {
        id: 'default-3',
        word: 'book',
        pronunciation: '/bʊk/',
        translation: 'libro',
        image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" fill="%23131b2e"/><rect x="55" y="55" width="90" height="100" rx="8" fill="%23a855f7" opacity="0.9"/><rect x="65" y="45" width="80" height="10" rx="3" fill="%23c084fc"/><path d="M55 140H145V155H55V140Z" fill="%237e22ce"/><path d="M68 65H132V130H68V65Z" fill="%23f3f4f6"/><rect x="78" y="80" width="44" height="6" rx="2" fill="%23e5e7eb"/><rect x="78" y="95" width="44" height="6" rx="2" fill="%23e5e7eb"/><rect x="78" y="110" width="30" height="6" rx="2" fill="%23e5e7eb"/></svg>',
        video1: 'https://www.youtube.com/watch?v=mC1o04mD-Ww',
        video2: 'https://www.youtube.com/watch?v=d8nS01p_mSw',
        learned: false
    }
];

// App State Management
let vocabCards = [];
let studyDays = new Set(); // Store completed study dates as "YYYY-MM-DD"
let selectedImageBase64 = null;
let activeImageTab = 'upload'; // 'upload' or 'url'
let activeTheme = 'aurora';

// DOM Elements
const cardsGrid = document.getElementById('cardsGrid');
const emptyState = document.getElementById('emptyState');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const cardModal = document.getElementById('cardModal');
const cardForm = document.getElementById('cardForm');
const searchBar = document.getElementById('searchBar');
const btnAutoTranslate = document.getElementById('btnAutoTranslate');
const wordInput = document.getElementById('wordInput');
const translationInput = document.getElementById('translationInput');
const pronunciationInput = document.getElementById('pronunciationInput');
const video1Input = document.getElementById('video1Input');
const video2Input = document.getElementById('video2Input');
const totalWordsCountEl = document.getElementById('totalWordsCount');
const learnedWordsCountEl = document.getElementById('learnedWordsCount');

// Image upload DOM
const dropZone = document.getElementById('dropZone');
const imageInput = document.getElementById('imageInput');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');
const previewWrapper = document.getElementById('previewWrapper');
const imagePreview = document.getElementById('imagePreview');
const btnRemoveImage = document.getElementById('btnRemoveImage');
const btnCreateFirst = document.getElementById('btnCreateFirst');

// Image URL DOM
const imageUrlInput = document.getElementById('imageUrlInput');
const urlPreviewWrapper = document.getElementById('urlPreviewWrapper');
const imageUrlPreview = document.getElementById('imageUrlPreview');
const btnRemoveUrlImage = document.getElementById('btnRemoveUrlImage');
const tabBtns = document.querySelectorAll('.tab-btn');
const suggestionsPanel = document.getElementById('suggestionsPanel');
const suggestionsGrid = document.getElementById('suggestionsGrid');

// Theme DOM
const themeDots = document.querySelectorAll('.theme-dot');

// Streak Widget & Calendar DOM
const streakCountEl = document.getElementById('streakCount');
const streakStatusEl = document.getElementById('streakStatus');
const streakFireEl = document.getElementById('streakFire');
const weeklyTrackerEl = document.getElementById('weeklyTracker');
const btnCalendarToggle = document.getElementById('btnCalendarToggle');
const calendarModal = document.getElementById('calendarModal');
const btnCloseCalendarModal = document.getElementById('btnCloseCalendarModal');
const calendarDaysGrid = document.getElementById('calendarDaysGrid');
const calendarTitle = document.getElementById('calendarTitle');
const totalDaysStudiedEl = document.getElementById('totalDaysStudied');
const maxStreakValEl = document.getElementById('maxStreakVal');

// Audio visualizer DOM
const audioFeedback = document.getElementById('audioFeedback');

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    
    // Load and apply theme
    activeTheme = localStorage.getItem('vocab_theme') || 'aurora';
    applyTheme(activeTheme);

    // Load daily motivational quote for Liz
    const today = new Date();
    // Rotate quote based on the day of the month
    const dayOfMonth = today.getDate();
    const quoteIndex = (dayOfMonth - 1) % LIZ_MOTIVATIONAL_QUOTES.length;
    const dailyQuote = LIZ_MOTIVATIONAL_QUOTES[quoteIndex];
    const quoteTextEl = document.getElementById('quoteText');
    if (quoteTextEl) {
        quoteTextEl.innerText = `"${dailyQuote}"`;
    }

    setupEventListeners();
    renderBoard();
    updateStreakDisplay();
    updateGlobalStats();
});

// Load data from localStorage
function loadSavedData() {
    const savedCards = localStorage.getItem('vocab_cards');
    if (savedCards) {
        vocabCards = JSON.parse(savedCards);
        // Migration: ensure default cards get updated with the new video links if they don't have them
        let migrated = false;
        vocabCards = vocabCards.map(card => {
            const defaultMatch = DEFAULT_CARDS.find(d => d.id === card.id);
            if (defaultMatch && !card.video1) {
                migrated = true;
                return { ...card, video1: defaultMatch.video1, video2: defaultMatch.video2 };
            }
            return card;
        });
        if (migrated) {
            saveCards();
        }
    } else {
        vocabCards = [...DEFAULT_CARDS];
        saveCards();
    }

    const savedDays = localStorage.getItem('study_days');
    if (savedDays) {
        studyDays = new Set(JSON.parse(savedDays));
    } else {
        // Pre-check today as example if it's the very first time
        const todayStr = getLocalDateString(new Date());
        studyDays.add(todayStr);
        saveDays();
    }
}

// Save cards to local storage
function saveCards() {
    localStorage.setItem('vocab_cards', JSON.stringify(vocabCards));
}

// Save days to local storage
function saveDays() {
    localStorage.setItem('study_days', JSON.stringify(Array.from(studyDays)));
}

// Helper: Formats Date as "YYYY-MM-DD" local time
function getLocalDateString(date) {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0];
}

// Setup Event Listeners
function setupEventListeners() {
    // Modal toggle
    btnOpenModal.addEventListener('click', () => openModal(cardModal));
    btnCreateFirst.addEventListener('click', () => openModal(cardModal));
    btnCloseModal.addEventListener('click', () => closeModal(cardModal));
    btnCancelModal.addEventListener('click', () => closeModal(cardModal));
    
    // Close modal by clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cardModal) closeModal(cardModal);
        if (e.target === calendarModal) closeModal(calendarModal);
        if (e.target === pronunciationModal) closePronunciationModal();
    });

    // Image Source Tabs Switcher
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            activeImageTab = targetTab;
            
            // Toggle active classes on tab buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Toggle tab content visibility
            document.getElementById('tabContentUpload').style.display = targetTab === 'upload' ? 'block' : 'none';
            document.getElementById('tabContentUrl').style.display = targetTab === 'url' ? 'block' : 'none';
        });
    });

    // Image Upload Interactions
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleImageFile(e.dataTransfer.files[0]);
        }
    });

    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageFile(e.target.files[0]);
        }
    });

    btnRemoveImage.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetImageUpload();
    });

    // Image URL Preview
    imageUrlInput.addEventListener('input', () => {
        const url = imageUrlInput.value.trim();
        if (url) {
            imageUrlPreview.src = url;
            urlPreviewWrapper.style.display = 'block';
        } else {
            resetUrlImage();
        }
    });

    imageUrlPreview.addEventListener('error', () => {
        // Clear preview if URL load fails
        if (imageUrlInput.value.trim()) {
            imageUrlPreview.src = '';
            urlPreviewWrapper.style.display = 'none';
            alert('No se pudo cargar la imagen desde la URL. Verifica que sea un enlace válido y público.');
        }
    });

    btnRemoveUrlImage.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetUrlImage();
    });

    // Theme dots events
    themeDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const theme = dot.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    // Auto-translation click event
    btnAutoTranslate.addEventListener('click', async () => {
        const userInput = wordInput.value.trim();
        if (!userInput) {
            alert('Por favor, ingresa una palabra en inglés o español primero.');
            wordInput.focus();
            return;
        }

        // Set button loading state
        btnAutoTranslate.classList.add('loading');
        btnAutoTranslate.disabled = true;
        const btnText = btnAutoTranslate.querySelector('.btn-action-text');
        const originalText = btnText.innerText;
        btnText.innerText = 'Traduciendo...';

        try {
            // First step: translate input from Auto to English to detect source language
            const detectUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(userInput)}`;
            const detectRes = await fetch(detectUrl);
            if (!detectRes.ok) throw new Error('Error de conexión con el traductor');
            const detectData = await detectRes.json();
            
            const detectedLang = detectData[2]; // Detected source language (e.g. 'es', 'en')
            const translatedEnglish = detectData[0][0][0]; // Input translated to English
            
            let englishWord = '';
            let spanishTranslation = '';
            
            if (detectedLang === 'es') {
                // If user wrote in Spanish:
                englishWord = translatedEnglish.toLowerCase();
                spanishTranslation = userInput.toLowerCase();
                
                // Update English input field with the translated English word
                wordInput.value = englishWord;
            } else {
                // If user wrote in English (or other):
                englishWord = userInput.toLowerCase();
                
                // Fetch translation from English to Spanish
                const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(englishWord)}`;
                const translateRes = await fetch(translateUrl);
                if (translateRes.ok) {
                    const translateData = await translateRes.json();
                    spanishTranslation = translateData[0][0][0].toLowerCase();
                } else {
                    spanishTranslation = '';
                }
            }

            // Fetch English Phonetic IPA (Free Dictionary API) for the English word
            const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(englishWord)}`;
            let phonetic = '';
            try {
                const dictRes = await fetch(dictionaryUrl);
                if (dictRes.ok) {
                    const dictData = await dictRes.json();
                    if (dictData && dictData[0]) {
                        const entry = dictData[0];
                        phonetic = entry.phonetic || (entry.phonetics && entry.phonetics.find(p => p.text)?.text) || '';
                    }
                }
            } catch (err) {
                console.warn('Failed to fetch pronunciation from dictionary api:', err);
            }

            // Autofill fields
            if (spanishTranslation) {
                translationInput.value = spanishTranslation;
            } else {
                translationInput.value = '';
                alert('No se pudo autocompletar la traducción a español. Escríbela manualmente.');
            }

            pronunciationInput.value = phonetic || '';
            
            // Fetch and render image suggestions
            loadSuggestions(englishWord);

        } catch (error) {
            console.error('Error in autocompletion:', error);
            alert('Ocurrió un error al intentar autocompletar. Por favor, ingresa los datos manualmente.');
        } finally {
            // Restore button state
            btnAutoTranslate.classList.remove('loading');
            btnAutoTranslate.disabled = false;
            btnText.innerText = originalText;
        }
    });

    // Form Submission
    cardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveNewCard();
    });

    // Search Bar filter
    searchBar.addEventListener('input', () => {
        renderBoard(searchBar.value.trim());
    });

    // Calendar Modal toggle
    btnCalendarToggle.addEventListener('click', () => {
        renderMonthlyCalendar();
        openModal(calendarModal);
    });
    btnCloseCalendarModal.addEventListener('click', () => closeModal(calendarModal));
    
    // Pronunciation modal close button
    if (btnClosePronunciationModal) {
        btnClosePronunciationModal.addEventListener('click', closePronunciationModal);
    }
}

// Open / Close modal helpers
function openModal(modalEl) {
    modalEl.classList.add('open');
}

function closeModal(modalEl) {
    modalEl.classList.remove('open');
    if (modalEl === cardModal) {
        cardForm.reset();
        resetImageUpload();
        resetUrlImage();
        
        // Hide and clear suggestions
        if (suggestionsPanel) suggestionsPanel.style.display = 'none';
        if (suggestionsGrid) suggestionsGrid.innerHTML = '';
        
        // Reset tab buttons to upload tab
        activeImageTab = 'upload';
        tabBtns.forEach(b => b.classList.remove('active'));
        const defaultTabBtn = document.querySelector('.tab-btn[data-tab="upload"]');
        if (defaultTabBtn) defaultTabBtn.classList.add('active');
        
        const uploadContent = document.getElementById('tabContentUpload');
        const urlContent = document.getElementById('tabContentUrl');
        if (uploadContent) uploadContent.style.display = 'block';
        if (urlContent) urlContent.style.display = 'none';
    }
}

// Convert and preview image file
function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona una archivo de imagen válido.');
        return;
    }
    
    // Resize image client-side to prevent localStorage quota issues (max 5MB limit)
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 400; // Optimal size for study cards
            const scaleSize = MAX_WIDTH / img.width;
            
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            selectedImageBase64 = canvas.toDataURL('image/jpeg', 0.8);
            
            // Show preview UI
            imagePreview.src = selectedImageBase64;
            uploadPlaceholder.style.display = 'none';
            previewWrapper.style.display = 'block';
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

// Reset image upload field
function resetImageUpload() {
    selectedImageBase64 = null;
    imageInput.value = '';
    imagePreview.src = '';
    uploadPlaceholder.style.display = 'flex';
    previewWrapper.style.display = 'none';
}

// Reset URL image field
function resetUrlImage() {
    imageUrlInput.value = '';
    imageUrlPreview.src = '';
    urlPreviewWrapper.style.display = 'none';
}

// Save card to state and localStorage
function saveNewCard() {
    const word = document.getElementById('wordInput').value.trim();
    const pronunciation = document.getElementById('pronunciationInput').value.trim();
    const translation = document.getElementById('translationInput').value.trim();
    const video1 = document.getElementById('video1Input').value.trim();
    const video2 = document.getElementById('video2Input').value.trim();

    let imageUrl = '';
    if (activeImageTab === 'upload') {
        if (!selectedImageBase64) {
            alert('Por favor, selecciona una imagen local.');
            return;
        }
        imageUrl = selectedImageBase64;
    } else {
        const urlValue = imageUrlInput.value.trim();
        if (!urlValue || !imageUrlPreview.src) {
            alert('Por favor, ingresa una URL de imagen válida y asegúrate de que cargue correctamente.');
            return;
        }
        imageUrl = urlValue;
    }

    const newCard = {
        id: 'card-' + Date.now(),
        word,
        pronunciation,
        translation,
        image: imageUrl,
        video1,
        video2,
        learned: false
    };

    vocabCards.unshift(newCard); // Add to the beginning of list
    saveCards();
    renderBoard();
    updateGlobalStats();
    closeModal(cardModal);
    
    // Automatically log study day when adding a card
    logStudyDayToday();
}

// Delete vocabulary card
function deleteCard(id, e) {
    e.stopPropagation(); // Stop click event propagation to avoid reveal flip
    
    if (confirm('¿Estás seguro de que quieres eliminar esta tarjeta?')) {
        vocabCards = vocabCards.filter(card => card.id !== id);
        saveCards();
        renderBoard(searchBar.value.trim());
        updateGlobalStats();
    }
}

// Toggle learned status of a card
function toggleLearnedStatus(id, e) {
    e.stopPropagation(); // Stop click event propagation to avoid reveal flip
    
    const card = vocabCards.find(c => c.id === id);
    if (card) {
        card.learned = !card.learned;
        saveCards();
        renderBoard(searchBar.value.trim());
        updateGlobalStats();
        
        // Also log study day today if marked as learned
        if (card.learned) {
            logStudyDayToday();
        }
    }
}

// Update the global word and learned count stats in header
function updateGlobalStats() {
    const totalWords = vocabCards.length;
    const learnedWords = vocabCards.filter(c => c.learned).length;
    
    if (totalWordsCountEl) {
        totalWordsCountEl.innerText = totalWords;
    }
    if (learnedWordsCountEl) {
        learnedWordsCountEl.innerText = learnedWords;
    }
}

// Voice synthesis of word
function speakWord(word, e, slow = false) {
    e.stopPropagation(); // Avoid card revealing flip
    
    if ('speechSynthesis' in window) {
        // Cancel active speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // Default English pronunciation
        
        // Speech playback speed rate (Turtle mode uses slow speed)
        utterance.rate = slow ? 0.4 : 1.0;
        
        // Find an English voice if available
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(voice => voice.lang.startsWith('en'));
        if (enVoice) utterance.voice = enVoice;
        
        // Speech feedback animation triggers
        utterance.onstart = () => {
            audioFeedback.classList.add('active');
        };
        
        utterance.onend = () => {
            audioFeedback.classList.remove('active');
        };
        
        utterance.onerror = () => {
            audioFeedback.classList.remove('active');
        };
 
        window.speechSynthesis.speak(utterance);
    } else {
        alert('La síntesis de voz no está soportada en este navegador.');
    }
}

// Pronunciation Videos Modal Management
const pronunciationModal = document.getElementById('pronunciationModal');
const btnClosePronunciationModal = document.getElementById('btnClosePronunciationModal');
const pronunciationWord = document.getElementById('pronunciationWord');
const pronunciationIpa = document.getElementById('pronunciationIpa');
const pronunciationTranslation = document.getElementById('pronunciationTranslation');
const pronunciationVideosContainer = document.getElementById('pronunciationVideosContainer');

// List of public Invidious instances to fetch YouTube search without API keys
const INVIDIOUS_INSTANCES = [
    'https://yewtu.be',
    'https://vid.puffyan.us',
    'https://invidious.projectsegfau.lt',
    'https://invidious.flokinet.to',
    'https://invidious.privacydev.net'
];

// Extract YouTube video ID from various formats, supporting Shorts, Watch, Embed, etc.
function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    url = url.trim();
    
    // Matches youtube.com/watch?v=..., youtube.com/shorts/..., youtube.com/embed/..., youtu.be/...
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?enablejsapi=1&rel=0`;
    }
    
    // If it's already an embed url
    if (url.includes('youtube.com/embed/')) {
        return url;
    }
    
    return '';
}

// Render video container dynamically based on URL (YouTube vs direct MP4 file vs generic)
function renderVideoPlayer(url, title, index) {
    if (!url) return '';
    url = url.trim();
    
    const embedUrl = getYouTubeEmbedUrl(url);
    const sourceLabel = `Video ${index}`;
    
    if (embedUrl) {
        // YouTube embed
        return `
            <div class="video-box">
                <div class="video-player-header">
                    <div class="player-dots">
                        <span class="player-dot close"></span>
                        <span class="player-dot minimize"></span>
                        <span class="player-dot maximize"></span>
                    </div>
                    <span class="video-title" title="${url}">${title}</span>
                    <span class="player-badge">Video ${index}</span>
                </div>
                <div class="video-iframe-wrapper">
                    <iframe 
                        src="${embedUrl}" 
                        title="${title}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-player-footer">
                    <div class="footer-left">
                        <span class="footer-status"><span class="status-dot"></span>STREAM EN LÍNEA</span>
                    </div>
                    <div class="footer-right">
                        <a href="${url}" target="_blank" class="footer-link-btn" title="Abrir video directamente en YouTube">
                            <span>Ver en YouTube ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else if (url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm') || url.toLowerCase().endsWith('.ogg') || url.includes('video') || url.startsWith('file:///')) {
        // Native HTML5 Video
        return `
            <div class="video-box">
                <div class="video-player-header">
                    <div class="player-dots">
                        <span class="player-dot close"></span>
                        <span class="player-dot minimize"></span>
                        <span class="player-dot maximize"></span>
                    </div>
                    <span class="video-title" title="${url}">${title}</span>
                    <span class="player-badge">Video ${index}</span>
                </div>
                <div class="video-iframe-wrapper">
                    <video controls src="${url}" style="width: 100%; height: 100%; object-fit: contain; background: #000; border: none; display: block;"></video>
                </div>
                <div class="video-player-footer">
                    <div class="footer-left">
                        <span class="footer-status" style="color: var(--primary);"><span class="status-dot" style="background: var(--primary); box-shadow: 0 0 8px var(--primary-glow);"></span>ARCHIVO LOCAL</span>
                    </div>
                    <div class="footer-right">
                        <a href="${url}" target="_blank" class="footer-link-btn" title="Abrir archivo de video en pestaña nueva">
                            <span>Abrir archivo ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        // General link fallback or generic iframe
        return `
            <div class="video-box">
                <div class="video-player-header">
                    <div class="player-dots">
                        <span class="player-dot close"></span>
                        <span class="player-dot minimize"></span>
                        <span class="player-dot maximize"></span>
                    </div>
                    <span class="video-title" title="${url}">${title}</span>
                    <span class="player-badge">Video ${index}</span>
                </div>
                <div class="video-iframe-wrapper">
                    <iframe 
                        src="${url}" 
                        title="${title}"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-player-footer">
                    <div class="footer-left">
                        <span class="footer-status" style="color: var(--text-muted);"><span class="status-dot" style="background: var(--text-muted); box-shadow: none;"></span>URL GENÉRICA</span>
                    </div>
                    <div class="footer-right">
                        <a href="${url}" target="_blank" class="footer-link-btn" title="Abrir enlace en pestaña nueva">
                            <span>Abrir enlace ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Open pronunciation modal and load videos
async function openPronunciationModal(card) {
    if (!pronunciationModal) return;
    
    // Set text contents
    pronunciationWord.innerText = `Pronunciación de: ${card.word}`;
    pronunciationIpa.innerText = card.pronunciation || '/-/';
    pronunciationTranslation.innerText = card.translation || '';
    
    // Wire up global search redirect button on top of modal
    const btnYoutubeGlobal = document.getElementById('btnYoutubeGlobal');
    if (btnYoutubeGlobal) {
        btnYoutubeGlobal.href = `https://www.youtube.com/results?search_query=how+to+pronounce+${encodeURIComponent(card.word)}+english`;
    }
    
    openModal(pronunciationModal);
    
    // Log study activity
    logStudyDayToday();

    // Check if card has manually defined videos (or pre-configured default ones)
    if (card.video1 || card.video2) {
        let htmlContent = '';
        if (card.video1) htmlContent += renderVideoPlayer(card.video1, `Pronunciación 1 de ${card.word}`, 1);
        if (card.video2) htmlContent += renderVideoPlayer(card.video2, `Pronunciación 2 de ${card.word}`, 2);
        
        pronunciationVideosContainer.innerHTML = htmlContent;
    } else {
        // Clear container and show loading state for automatic search
        pronunciationVideosContainer.innerHTML = `
            <div class="video-loading">
                <div class="video-loading-spinner"></div>
                <span>Buscando videos de pronunciación para "${card.word}"...</span>
            </div>
        `;

        try {
            const videos = await fetchPronunciationVideos(card.word);
            renderVideos(videos, card.word);
        } catch (err) {
            console.error('Error fetching Invidious videos, trying YouGlish fallback:', err);
            loadYouGlishFallback(card.word);
        }
    }
}

// Fetch search results from Invidious instance (with timeout and fallback)
async function fetchPronunciationVideos(word) {
    const query = encodeURIComponent(`how to pronounce "${word}" English`);
    
    for (const base of INVIDIOUS_INSTANCES) {
        try {
            const url = `${base}/api/v1/search?q=${query}&type=video`;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout per instance
            
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);
            
            if (response.ok) {
                const data = await response.json();
                if (data && Array.isArray(data)) {
                    const videos = data.filter(item => item.type === 'video');
                    if (videos && videos.length >= 2) {
                        return videos.slice(0, 2).map(v => ({
                            id: v.videoId,
                            title: v.title,
                            author: v.author
                        }));
                    } else if (videos && videos.length === 1) {
                        return [{
                            id: videos[0].videoId,
                            title: videos[0].title,
                            author: videos[0].author
                        }];
                    }
                }
            }
        } catch (e) {
            console.warn(`Failed to search using Invidious instance ${base}:`, e.message || e);
        }
    }
    throw new Error('All Invidious instances failed to return search results.');
}

// Render video elements inside modal
function renderVideos(videos, word) {
    pronunciationVideosContainer.innerHTML = '';
    
    if (!videos || videos.length === 0) {
        throw new Error('No videos returned');
    }
    
    videos.forEach((video, index) => {
        const videoBox = document.createElement('div');
        videoBox.className = 'video-box';
        
        // Use clean, aesthetic descriptions for the pronunciation channels
        const sourceLabel = video.author ? `Por: ${video.author}` : `Opción ${index + 1}`;
        const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
        
        videoBox.innerHTML = `
            <div class="video-player-header">
                <div class="player-dots">
                    <span class="player-dot close"></span>
                    <span class="player-dot minimize"></span>
                    <span class="player-dot maximize"></span>
                </div>
                <span class="video-title" title="${video.title}">${video.title}</span>
                <span class="player-badge">Video ${index + 1}</span>
            </div>
            <div class="video-iframe-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.id}?enablejsapi=1&rel=0" 
                    title="${video.title}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-player-footer">
                <div class="footer-left">
                    <span class="footer-status"><span class="status-dot"></span>${sourceLabel}</span>
                </div>
                <div class="footer-right">
                    <a href="${videoUrl}" target="_blank" class="footer-link-btn" title="Abrir video directamente en YouTube">
                        <span>Ver en YouTube ↗</span>
                    </a>
                </div>
            </div>
        `;
        pronunciationVideosContainer.appendChild(videoBox);
    });
}

// Load YouGlish widget as fallback
function loadYouGlishFallback(word) {
    pronunciationVideosContainer.innerHTML = `
        <div class="youglish-wrapper">
            <span class="video-title" style="margin-bottom: 0.5rem;">Cargando pronunciaciones en contexto real (YouGlish):</span>
            <div id="yg-widget-container">
                <a class="yg-widget" href="https://youglish.com" data-query="${word}" data-lang="english" data-components="7423" data-bmode="1" data-fill-width="1" data-scroll="sub" data-links="0" data-autoplay="0">
                    Ver pronunciación de "${word}" en YouGlish
                </a>
            </div>
        </div>
    `;
    
    // Dynamically load the YouGlish widget script if not already loaded
    if (!document.getElementById('yg-script')) {
        const script = document.createElement('script');
        script.id = 'yg-script';
        script.src = "https://youglish.com/public/emb/widget.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
    } else {
        // If script is already present, we re-initialize the widget for the new word
        try {
            if (window.YG && typeof window.YG.Widget !== 'undefined') {
                // Find existing widgets or trigger ready
                if (typeof window.onYouglishAPIReady === 'function') {
                    window.onYouglishAPIReady();
                }
            } else {
                // If script loaded but API not ready, trigger reload of script or wait
                delete window.YG;
                const oldScript = document.getElementById('yg-script');
                if (oldScript) oldScript.remove();
                const script = document.createElement('script');
                script.id = 'yg-script';
                script.src = "https://youglish.com/public/emb/widget.js";
                script.async = true;
                script.charset = "utf-8";
                document.body.appendChild(script);
            }
        } catch (e) {
            console.error('Error re-initializing YouGlish:', e);
        }
    }
}

// Close pronunciation modal and clean up iframe elements to stop playback
function closePronunciationModal() {
    if (!pronunciationModal) return;
    
    // Clear inner HTML of videos container so any playing iframe is instantly destroyed and stops playing
    pronunciationVideosContainer.innerHTML = '';
    closeModal(pronunciationModal);
}

// Render cards board
function renderBoard(filterQuery = '') {
    cardsGrid.innerHTML = '';
    
    const query = filterQuery.toLowerCase();
    const filteredCards = vocabCards.filter(card => 
        card.word.toLowerCase().includes(query) || 
        card.translation.toLowerCase().includes(query)
    );

    if (filteredCards.length === 0) {
        emptyState.style.display = 'flex';
        cardsGrid.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    cardsGrid.style.display = 'grid';

    filteredCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'vocab-card glass-panel' + (card.learned ? ' learned' : '');
        cardEl.setAttribute('id', card.id);
        
        // Toggle class 'revealed' on mobile click/tap
        cardEl.addEventListener('click', () => {
            cardEl.classList.toggle('revealed');
        });

        cardEl.innerHTML = `
            <div class="card-actions">
                <div class="action-group-left">
                    <button class="card-action-btn btn-speak" title="Escuchar pronunciación">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                        </svg>
                    </button>
                    <button class="card-action-btn btn-speak-slow" title="Escuchar pronunciación lenta (modo tortuga)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"/>
                            <path d="M4.82 7.9 8 11"/>
                            <path d="M15.5 9.3 19 8"/>
                            <path d="M5.5 9.3 2 8"/>
                            <path d="M10 2.5 8 5"/>
                        </svg>
                    </button>
                    <button class="card-action-btn btn-video" title="Ver videos de pronunciación">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                    </button>
                </div>
                <div class="action-group-right">
                    <button class="card-action-btn btn-learned" title="${card.learned ? 'Marcar como pendiente' : 'Marcar como aprendida'}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </button>
                    <button class="card-action-btn btn-delete-card" title="Eliminar tarjeta">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            <line x1="10" y1="11" x2="10" y2="17"/>
                            <line x1="14" y1="11" x2="14" y2="17"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="card-img-container">
                <img src="${card.image}" alt="${card.word}" loading="lazy">
            </div>
            
            <div class="card-info">
                <div class="word-details">
                    <span class="word-english">${card.word}</span>
                    <span class="word-pronunciation">${card.pronunciation}</span>
                </div>
            </div>
            
            <div class="translation-reveal">
                <span class="reveal-word-english">${card.word}</span>
                <span class="reveal-word-pronunciation">${card.pronunciation}</span>
                <div class="reveal-divider"></div>
                <span class="reveal-label">Significado</span>
                <span class="word-spanish">${card.translation}</span>
            </div>
        `;

        // Event listener for speak button
        cardEl.querySelector('.btn-speak').addEventListener('click', (e) => {
            speakWord(card.word, e);
        });

        // Event listener for speak slow button
        cardEl.querySelector('.btn-speak-slow').addEventListener('click', (e) => {
            speakWord(card.word, e, true);
        });

        // Event listener for video button
        cardEl.querySelector('.btn-video').addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid card flip
            openPronunciationModal(card);
        });

        // Event listener for learned button
        cardEl.querySelector('.btn-learned').addEventListener('click', (e) => {
            toggleLearnedStatus(card.id, e);
        });

        // Event listener for delete button
        cardEl.querySelector('.btn-delete-card').addEventListener('click', (e) => {
            deleteCard(card.id, e);
        });

        cardsGrid.appendChild(cardEl);
    });

    // Initialize 3D tilt effect on cards
    setupTiltEffect();
}

// --- Streak & Calendar Tracking System ---

// Log current day as studied
function logStudyDayToday() {
    const todayStr = getLocalDateString(new Date());
    if (!studyDays.has(todayStr)) {
        studyDays.add(todayStr);
        saveDays();
        updateStreakDisplay();
    }
}

// Toggle study date registration state
function toggleStudyDate(dateStr) {
    if (studyDays.has(dateStr)) {
        studyDays.delete(dateStr);
    } else {
        studyDays.add(dateStr);
    }
    saveDays();
    updateStreakDisplay();
}

// Get consecutive study streak count
function calculateStreak() {
    if (studyDays.size === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    let checkDate = new Date(today);
    
    const todayStr = getLocalDateString(today);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = getLocalDateString(yesterday);
    
    // If user hasn't studied today and also not yesterday, streak resets to 0
    if (!studyDays.has(todayStr) && !studyDays.has(yesterdayStr)) {
        return 0;
    }
    
    // Start checking from the most recent active study day (today or yesterday)
    if (!studyDays.has(todayStr)) {
        checkDate = yesterday;
    }
    
    while (true) {
        const checkStr = getLocalDateString(checkDate);
        if (studyDays.has(checkStr)) {
            streak++;
            // Go to previous day
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    return streak;
}

// Calculate the maximum (record) streak in history
function calculateMaxStreak() {
    if (studyDays.size === 0) return 0;
    
    // Convert to sorted date objects
    const sortedDates = Array.from(studyDays)
        .map(d => new Date(d))
        .sort((a, b) => a - b);
        
    let maxStreak = 0;
    let currentStreak = 0;
    let prevDate = null;
    
    sortedDates.forEach(date => {
        if (prevDate === null) {
            currentStreak = 1;
        } else {
            const diffTime = Math.abs(date - prevDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                currentStreak++;
            } else if (diffDays > 1) {
                if (currentStreak > maxStreak) maxStreak = currentStreak;
                currentStreak = 1;
            }
        }
        prevDate = date;
    });
    
    return Math.max(maxStreak, currentStreak);
}

// Update the Streak Widget Display (Week tracker + numbers)
function updateStreakDisplay() {
    const streak = calculateStreak();
    streakCountEl.innerText = streak;
    
    // Animate fire icon if streak is active
    if (streak > 0) {
        streakFireEl.classList.add('active');
        streakStatusEl.innerText = `¡Racha de ${streak} ${streak === 1 ? 'día' : 'días'}!`;
    } else {
        streakFireEl.classList.remove('active');
        streakStatusEl.innerText = '¡Comienza hoy!';
    }
    
    renderWeeklyTracker();
}

// Render the 7-day horizontal bar representing the current week
function renderWeeklyTracker() {
    weeklyTrackerEl.innerHTML = '';
    
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday...
    
    // Shift so Monday is index 0, Sunday is index 6
    const shiftIndex = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    
    // Generate dates for current Monday to Sunday
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - shiftIndex);
    
    const daysShort = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    
    for (let i = 0; i < 7; i++) {
        const loopDate = new Date(weekStart);
        loopDate.setDate(weekStart.getDate() + i);
        
        const dateStr = getLocalDateString(loopDate);
        const isFuture = loopDate > today;
        const isCompleted = studyDays.has(dateStr);
        
        const dayDot = document.createElement('div');
        dayDot.className = 'week-day';
        
        dayDot.innerHTML = `
            <span class="day-label">${daysShort[i]}</span>
            <div class="day-dot ${isCompleted ? 'completed' : ''} ${isFuture ? 'future' : ''}" 
                 data-date="${dateStr}" 
                 title="${isCompleted ? 'Estudiado' : 'Pendiente'}">
                 ${isCompleted ? '✓' : ''}
            </div>
        `;
        
        // Day click toggling (only if present or past day)
        if (!isFuture) {
            const dot = dayDot.querySelector('.day-dot');
            dot.addEventListener('click', () => {
                toggleStudyDate(dateStr);
            });
        }
        
        weeklyTrackerEl.appendChild(dayDot);
    }
}

// Render the detailed monthly calendar grid
function renderMonthlyCalendar() {
    calendarDaysGrid.innerHTML = '';
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-11
    
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    calendarTitle.innerText = `${monthNames[currentMonth]} ${currentYear}`;
    
    // First day of current month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDay.getDay(); // 0 (Sun) to 6 (Sat)
    
    // Total days in current month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Render empty slots for days of the week before the 1st
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day-cell empty-day';
        calendarDaysGrid.appendChild(emptyCell);
    }
    
    // Render calendar days
    for (let day = 1; day <= totalDays; day++) {
        const dateObj = new Date(currentYear, currentMonth, day);
        const dateStr = getLocalDateString(dateObj);
        
        const isFuture = dateObj > today;
        const isToday = dateStr === getLocalDateString(today);
        const isChecked = studyDays.has(dateStr);
        
        const cell = document.createElement('div');
        cell.className = `calendar-day-cell ${isChecked ? 'checked' : ''} ${isToday ? 'today' : ''} ${isFuture ? 'future' : ''}`;
        cell.innerText = day;
        cell.setAttribute('data-date', dateStr);
        
        if (!isFuture) {
            cell.addEventListener('click', () => {
                toggleStudyDate(dateStr);
                // Rerender the active monthly calendar grid to refresh checkbox state
                renderMonthlyCalendar();
            });
        }
        
        calendarDaysGrid.appendChild(cell);
    }
    
    // Update statistical counters
    totalDaysStudiedEl.innerText = studyDays.size;
    maxStreakValEl.innerText = calculateMaxStreak();
}

// Apply visual theme to body and dots
function applyTheme(themeName) {
    activeTheme = themeName;
    localStorage.setItem('vocab_theme', themeName);
    
    // Clear theme classes and apply the new one
    document.body.className = '';
    document.body.classList.add(`theme-${themeName}`);
    
    // Update active state on theme dots in toolbar
    themeDots.forEach(dot => {
        if (dot.getAttribute('data-theme') === themeName) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 3D Tilt Hover effect on vocabulary cards
function setupTiltEffect() {
    // Only enable tilt effect on devices that support hover (non-touch)
    if (!window.matchMedia('(hover: hover)').matches) {
        return;
    }
    
    const cards = document.querySelectorAll('.vocab-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within card
            const y = e.clientY - rect.top;  // y position within card
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle based on mouse distance from center
            // Max tilt angle = 12 degrees
            const rotateX = ((centerY - y) / centerY) * 12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset transition smoothly
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// Fetch image suggestions from Wikimedia Commons API
async function fetchImageSuggestions(word) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(word)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&format=json&origin=*`;
    try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.query || !data.query.pages) return [];
        
        const imageUrls = [];
        const pages = data.query.pages;
        for (const id in pages) {
            const page = pages[id];
            if (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
                const imgUrl = page.imageinfo[0].url;
                const lowerUrl = imgUrl.toLowerCase();
                // Filter out non-image files
                if (lowerUrl.endsWith('.jpg') || lowerUrl.endsWith('.jpeg') || lowerUrl.endsWith('.png') || lowerUrl.endsWith('.webp')) {
                    imageUrls.push(imgUrl);
                }
            }
        }
        return imageUrls.slice(0, 6); // Return max 6 image suggestions
    } catch (e) {
        console.error('Error fetching image suggestions:', e);
        return [];
    }
}

// Load and render image suggestions
async function loadSuggestions(word) {
    if (!suggestionsPanel || !suggestionsGrid) return;
    
    // Clear grid and show panel
    suggestionsGrid.innerHTML = `
        <div style="grid-column: span 3; text-align: center; font-size: 0.85rem; color: var(--text-muted); padding: 15px;">
            Buscando sugerencias de imágenes...
        </div>
    `;
    suggestionsPanel.style.display = 'block';
    
    const images = await fetchImageSuggestions(word);
    
    suggestionsGrid.innerHTML = '';
    
    if (images.length === 0) {
        suggestionsGrid.innerHTML = `
            <div style="grid-column: span 3; text-align: center; font-size: 0.85rem; color: var(--text-muted); padding: 15px;">
                No se encontraron imágenes sugeridas para "${word}".
            </div>
        `;
        return;
    }
    
    images.forEach(url => {
        const thumb = document.createElement('div');
        thumb.className = 'suggestion-thumb';
        
        thumb.innerHTML = `<img src="${url}" alt="Sugerencia" loading="lazy">`;
        
        thumb.addEventListener('click', () => {
            // Highlight selected thumbnail
            document.querySelectorAll('.suggestion-thumb').forEach(t => t.classList.remove('selected'));
            thumb.classList.add('selected');
            
            // Set input value and trigger preview
            imageUrlInput.value = url;
            imageUrlInput.dispatchEvent(new Event('input'));
            
            // Auto switch tab to URL tab so user sees selection preview
            const urlTabBtn = document.querySelector('.tab-btn[data-tab="url"]');
            if (urlTabBtn) {
                if (!urlTabBtn.classList.contains('active')) {
                    urlTabBtn.click();
                }
            }
        });
        
        suggestionsGrid.appendChild(thumb);
    });
}
