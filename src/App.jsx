
// import { FaExternalLinkAlt, FaDownload, FaLink, FaGithub, FaCheckCircle, FaExclamationCircle, FaAngleRight, FaChartPie, FaShieldAlt, FaTools, FaClock, FaPenFancy, FaListOl, FaGlobe, FaCameraRetro, FaStar } from "react-icons/fa";
// import { SiMega } from "react-icons/si";
// import { GiInspiration } from "react-icons/gi";
// import { DiGoogleDrive } from "react-icons/di";



import pic from './assets/pic.jpg';
import org1 from "./assets/1_Traditional_Song_418.wav"
import org2 from "./assets/3_Children_class_noise_445.wav"
import org3 from "./assets/10_Ektara_95.wav"
import org4 from "./assets/14_Fish_market_316.wav"
import org5 from "./assets/17_Kalboishakhi_Storm_324.wav"

import org6 from "./assets/18_Sanatan_Religion_Aroti_243.wav"
import org7 from "./assets/4_Harmonium_353.wav"
import org8 from "./assets/16_Elephant_129.wav"
import org9 from "./assets/0_Tanpura_232.wav"

import mix1 from "./assets/mixed_audio_2.wav"
import mix2 from "./assets/mixed_audio_23.wav"
import mix3 from "./assets/mixed_audio_3.wav"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 font-sans">


       

      <section id="banner" className="bg-sky-500 text-white py-16 px-6 text-center">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
      Soundscapes in Spectrograms:  
      <span className="block">Pioneering Multilabel Classification for South Asian Sounds</span>
    </h1>
    
    <h2 className="text-4xl md:text-5xl font-semibold mb-8 mt-18">Model Architecture</h2>
    
    <div className="flex justify-center">
      <img
        src={pic}
        alt="Dataset Banner"
        className="w-full rounded-xl shadow-xl border-4 border-white"
      />
    </div>
  </div>
</section>


<section id="dataset" className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6">
  <div className="container mx-auto max-w-4xl text-lg">
    
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
      Abstract
    </h2>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed text-justify text-lg">
      Environmental sound classification has gained significant attention due to its diverse applications 
      in urban monitoring and cultural soundscape analysis, particularly in regions with rich and varied 
      auditory environments like South Asia. Traditional approaches primarily rely on Mel-Frequency 
      Cepstral Coefficients (MFCC) for feature extraction. However, this study introduces a novel 
      spectrogram-based methodology, demonstrating its superior ability to capture intricate audio 
      patterns characteristic of South Asian soundscapes.
    </p>

    <p className="text-gray-700 leading-relaxed text-justify text-lg mt-4">
      Using a Convolutional Neural Network (CNN) architecture, we address a challenging multilabel, 
      multiclass classification task on the SAS-KIIT dataset. Additionally, we evaluate our approach on 
      the widely used UrbanSound8K dataset to ensure robustness and comparability. Our spectrogram-based 
      method outperforms conventional MFCC-based techniques, achieving higher classification accuracy 
      across both datasets.
    </p>

    <p className="text-gray-700 leading-relaxed text-justify text-lg mt-4">
      These findings highlight the potential of spectrogram analysis in advancing environmental sound 
      classification and preserving South Asia’s unique auditory heritage.
    </p>

    {/* Index Terms */}
    <p className="text-gray-600 font-semibold text-center mt-6">
      <span className="text-blue-700">Index Terms:</span> Multilabel Classification, Convolutional Neural Networks (CNN), 
      SAS-KIIT, UrbanSound8K, Spectrogram Analysis.
    </p>

  </div>
</section>



<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
      Audio Collection (Number original audio and created mixed audio)
    </h2>
    
    <div className="flex flex-col md:flex-row gap-6">
      {/* Original section with 75% width */}
      <div className="w-full md:w-3/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-700">Original Audio</h3>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center text-center'>
          <div className='w-full md:w-1/2'>
            <h2 className="text-lg font-semibold mb-2 text-gray-600">Traditional Song</h2>
            <audio controls className="w-full mb-2">
              <source src={org1} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className="text-lg font-semibold mb-2 text-gray-600">Children Class Noise</h2>
            <audio controls className="w-full mb-2">
              <source src={org2} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      
      {/* Smaller section with 25% width */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-700">Mixed Audio</h3>
        <audio controls className="w-full mb-2">
          <source src={mix1} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</section>


<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Original section with 75% width */}
      <div className="w-full md:w-3/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Original Audio</h3>
        <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center text-center'>
          <div className='w-full md:w-2/7'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Ektara</h2>
            <audio controls className="w-full mb-2">
              <source src={org3} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-2/7'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Fish Market</h2>
            <audio controls className="w-full mb-2">
              <source src={org4} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-2/7'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Kalboishakhi Storm</h2>
            <audio controls className="w-full mb-2">
              <source src={org5} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      
      {/* Smaller section with 25% width */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Mixed Audio</h3>
        <audio controls className="w-full mb-2">
          <source src={mix2} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</section>


<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Original section with 75% width */}
      <div className="w-full md:w-3/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Original Audio</h3>
        <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center text-center'>
          <div className='w-full md:w-4/9'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Sanatan Religion Aroti</h2>
            <audio controls className="w-full mb-2">
              <source src={org6} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-4/9'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Harmonium</h2>
            <audio controls className="w-full mb-2">
              <source src={org7} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-4/9'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Elephant</h2>
            <audio controls className="w-full mb-2">
              <source src={org8} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className='w-full md:w-4/9'>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Tanpura</h2>
            <audio controls className="w-full mb-2">
              <source src={org9} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      
      {/* Smaller section with 25% width */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Mixed Audio</h3>
        <audio controls className="w-full mb-2">
          <source src={mix3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</section>



{/* Footer */}
<footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-4">
  <div className="container mx-auto text-center space-y-2">
    
    {/* Copyright Notice */}
    <div className="text-lg font-semibold">
      <p>&copy; 2024 Multilabel Sound Classification Dataset. All rights reserved.</p>
    </div>

    {/* Tagline */}
    <div className="text-sm opacity-90">
      <p>Advancing Environmental Sound Recognition Through Deep Learning.</p>
    </div>

  </div>
</footer>

    </div >
  );
};

export default App;