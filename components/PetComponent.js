import React from 'react';
import {Text, View} from 'react-native'
import EggComponent from './EggComponent';
import EggWithEarsComponent from './EggWithEarsComponent';
import SmallPetComponent from './SmallPetComponent';
import MiddlePetComponent from './MiddlePetComponent';
import BigPetComponent from './BigPetComponent';


const PetComponent = (props) => {

    const growthStage1 = 0
    const growthStage2 = 5000
    const growthStage3 = 10000
    const growthStage4 = 50000
    const growthStage5 = 100000

    const currentPet = () => {
        if(props.totalSteps >= growthStage5) {
            return <BigPetComponent />
        }
        else if(props.totalSteps >= growthStage4) {
            return <MiddlePetComponent />
        }
        else if(props.totalSteps >= growthStage3) {
            return <SmallPetComponent />
        }
        else if(props.totalSteps >= growthStage2) {
            return <EggWithEarsComponent />
        }
        else if(props.totalSteps >= growthStage1){
            return <EggComponent />
        }
    }

    return ( 
        <View>
            {currentPet()}
        </View>
     );
}
 
export default PetComponent;