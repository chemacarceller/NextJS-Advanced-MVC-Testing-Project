export default class SpeechAgent {

    constructor(SpeechRecognition) {

        this.lang = 'es-ES';
        this.rate = 1;
        this.pitch = 1;
        this.voice = null;
        
        this.messageQueue = [];
        this.speaking = false;
        this.hearing = false;
        this.recognition = null;

        this.currentInputMessage = null;
        this.currentBtnVoice = null;
        this.fixedText = "";

        this.isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox');

        this._initVoices();

        if (!SpeechRecognition) {
            console.error("Este navegador no soporta SpeechRecognition.");
            return;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'es-ES';
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this._initRecognitionListeners();
    }

    _initVoices(favouriteVoice='') {
        const loadVoice = () => {
            if (typeof window === 'undefined') return;
            const voices = window.speechSynthesis.getVoices();
            const voicesInSpanish = voices.filter(v => v.lang.includes('es'));

            if (voicesInSpanish.length > 0) {
                const favorite = voicesInSpanish.find(v => v.name.includes(favouriteVoice));
                this.voice = favorite || voicesInSpanish[0];
            }
        };

        if (typeof window !== 'undefined' && window.speechSynthesis) {
            loadVoice();
            window.speechSynthesis.onvoiceschanged = loadVoice;
        }
    }

    _initRecognitionListeners() {

        if (!this.recognition) return;

        this.recognition.onstart = () => {
            this.hearing = true;
            if (this.currentBtnVoice) {
                this.currentBtnVoice.textContent = "Stop Dictation";
                this.currentBtnVoice.classList.add('hearing');
            }
        };

        this.recognition.onend = () => {
            this.hearing = false;
            if (this.currentBtnVoice) {
                this.currentBtnVoice.textContent = "Start Dictation";
                this.currentBtnVoice.classList.remove('hearing');
            }
        };

        this.recognition.onresult = (event) => {
            
            if (!this.currentInputMessage) return;

            let provisionaltext = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (!event.results[i] || !event.results[i][0] || typeof event.results[i][0].transcript === 'undefined') continue;

                let transcription = event.results[i][0].transcript.trim().toLowerCase();

                if (transcription === "borrar todo") {
                    this.fixedText = "";
                    this.currentInputMessage.value = "";
                    return;
                }

                if (event.results[i].isFinal) {
                    if (transcription === "punto y aparte") {
                        this.fixedText += ".\n\n";
                    } else {
                        this.fixedText += event.results[i][0].transcript + " ";
                    }
                } else {
                    if (transcription !== "punto y aparte" && transcription !== "borrar todo") {
                        provisionaltext += event.results[i][0].transcript;
                    }
                }
            }
            this.currentInputMessage.value = this.fixedText + provisionaltext;
            this.currentInputMessage.scrollTop = this.currentInputMessage.scrollHeight;
        };
    }

    speak(text) {
        const cleanText = text.replace(/\./g, '');
        if (!cleanText) return;

        this.messageQueue.push(cleanText);

        if (!this.speaking) this._processQueue();
    }

    _processQueue() {

        if (this.messageQueue.length === 0) {
            this.speaking = false;
            return;
        }

        this.speaking = true;
        const nextItem = this.messageQueue.shift();

        const reading = new SpeechSynthesisUtterance(nextItem);
        reading.lang = this.lang;
        reading.rate = this.rate;
        reading.pitch = this.pitch;
        if (this.voice) reading.voice = this.voice;

        reading.onend = () => this._processQueue();
        reading.onerror = () => this._processQueue();

        window.speechSynthesis.speak(reading);
    }

    async hear(inputMessage, btnVoice) {
        if (!this.recognition) return;

        this.currentInputMessage = inputMessage;
        this.currentBtnVoice = btnVoice;

        if (!this.hearing) {
            this.fixedText = inputMessage.value;
            this.recognition.start();
        } else {
            this.recognition.stop();
        }
    }

    destroy() {
        if (this.recognition) {
            this.recognition.stop();
            this.recognition.onstart = null;
            this.recognition.onend = null;
            this.recognition.onresult = null;
        }
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }
}
