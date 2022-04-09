import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from "react-native";
import VoiceButton from "../../media/icons/VoiceButton";
import Voice from '@react-native-voice/voice';
import VoiceButtonInactive from "../../media/icons/VoiceButtonInactive";
import position from "react-native-web/dist/exports/Touchable/Position";


const VoicButton = ({onPartialResult, onResult, onEnd, onStart, speechRecording}) => {
    const [speechStarted, setSpeechStarted] = useState(false)
    useEffect(() => {
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    useEffect(async ()=>{
        if (!speechRecording){
            setSpeechStarted(false)
            await Voice.stop();
        }
    }, [speechRecording])

    const onSpeechResults = (e)=>{
        onResult(e.value ?? [])
    }

    const onSpeechPartialResults = (e)=>{
        onPartialResult(e.value ?? [])
    }


    const toggleRecognition = useCallback(async ()=>{
        try {
            if (speechStarted){
                setSpeechStarted(false)
                onEnd()
                await Voice.stop();
            }else{
                setSpeechStarted(true)
                onStart()
                await Voice.start('en-US');
            }
        }catch (e){
            console.error(e);
        }
    },[speechStarted])

    return (
        <TouchableOpacity onPress={toggleRecognition}>
            {speechStarted ? <VoiceButton/> : <VoiceButtonInactive/>}
        </TouchableOpacity>
    );
};

export default VoicButton;