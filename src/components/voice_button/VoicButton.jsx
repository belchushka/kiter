import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from "react-native";
import VoiceButton from "../../media/icons/VoiceButton";
import Voice, {
    SpeechResultsEvent,
    SpeechErrorEvent,
} from "@react-native-voice/voice";


const VoicButton = () => {
    const [results, setResults] = useState([]);
    const [isListening, setIsListening] = useState(false);
    console.log(results);

    async function toggleListening() {
        try {
            if (isListening) {
                await Voice.stop();
                setIsListening(false);
            } else {
                console.log("start");
                setResults([]);
                await Voice.start("en-US");
                setIsListening(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        function onSpeechResults(e) {
            setResults(e.value ?? []);
        }
        function onSpeechError(e) {
            console.error(e);
        }
        Voice.onSpeechError = onSpeechError;

        Voice.onSpeechResults = onSpeechResults;

        return function cleanup() {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    })
    return (
        <TouchableOpacity onPress={toggleListening}>
            <VoiceButton/>
        </TouchableOpacity>
    );
};

export default VoicButton;