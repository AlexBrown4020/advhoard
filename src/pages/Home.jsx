import { React, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/navbar/Loader'
import KitchenScene from '../models/KitchenScene'
import Sky from '../models/Sky'
import RobotScene from '../models/RobotScene'

const Home = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const adjustSceneForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition];
    }

    const [sceneScale, scenePosition] = adjustSceneForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            {/* <div className='absolute top-28 left-0 right-0 z-10 items-center justify-center'>
                POPUP
            </div> */}
            <Canvas className={`w-full h-screen bg-transparent ${isScrolling ? 
                'cursor-grabbing': 'cursor-grab'
            }`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />} >
                    <directionalLight position={[10, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.2} />
                    <Sky />
                    <KitchenScene 
                        isScrolling={isScrolling}
                        setIsScrolling={setIsScrolling}
                        position={scenePosition}
                        scale={sceneScale}
                    />
                    <RobotScene />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity='1' />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home