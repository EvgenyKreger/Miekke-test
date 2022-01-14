import React from 'react';

import './App.css';
import {Main} from './components/main/Main';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Image} from './components/general/image/Image';
import mustang from './img/mustang.jpg';
import mustang2 from './img/mustang2.jpg';
import {Description} from './components/general/description/Description';
import {Button} from './components/general/button/Button';
import {DescriptionBlock} from './components/general/descriptionBlock/DescriptionBlock';


function App() {
    const navigate = useNavigate()
    const onclickButtonPage1Handler = () => navigate('/page1')
    const onclickButtonPage2Handler = () => navigate('/page2')
    const onclickButtonPage3Handler = () => navigate('/page3')
    const onclickButtonMainHandler = () => navigate('/')
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main block1={<Image image={mustang} alt={'car'}/>}
                                               block2={<Description title={'Символ Америки. Ford Mustang'}
                                                                    text={'Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней — все в новом Ford Mustang подчинено современным требованиям по защите пешеходов, в том числе и европейским. Теперь Mustang будет продаваться не только в США, но и в Старом Свете. Презентацию нового маслкара Ford устроил в самом сердце Европы — для знакомства с одним из главных символов Америки мы прилетели в Мюнхен.'}/>}
                                               block3={<Button title={'Читать далее'}
                                                               onclickButtonHandler={onclickButtonPage1Handler}/>}/>}/>

                <Route path="/page1" element={<Main block1={<Image image={mustang2} alt={'car'}/>}
                                                    block2={<DescriptionBlock title1={'Плюсы'}
                                                                              text1={'Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней.Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней'}
                                                                              title2={'Минусы'}
                                                                              text2={'Низкий капот со скругленной кромкой, сглаженные формы без острых углов и граней Низкий капот со скругленной кромкой, сглаженные формы без острых углов и граней.'}/>}
                                                    block3={<Button title={'Читать далее'}
                                                                    onclickButtonHandler={onclickButtonPage2Handler}/>}
                                                    block4={<Button title={'На главную'}
                                                                    onclickButtonHandler={onclickButtonMainHandler}/>}/>}/>
                <Route path="/page2" element={<Main block1={<Description title={'Символ Америки. Ford Mustang'}
                                                                         text={'Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней — все в новом Ford Mustang подчинено современным требованиям по защите пешеходов, в том числе и европейским. Теперь Mustang будет продаваться не только в США, но и в Старом Свете. Презентацию нового маслкара Ford устроил в самом сердце Европы — для знакомства с одним из главных символов Америки мы прилетели в Мюнхен.'}/>}
                                                    block2={<DescriptionBlock title1={'Плюсы'}
                                                                              text1={'Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней.Высокий капот со скругленной кромкой, сглаженные формы без острых углов и граней'}
                                                                              title2={'Минусы'}
                                                                              text2={'Низкий капот со скругленной кромкой, сглаженные формы без острых углов и граней Низкий капот со скругленной кромкой, сглаженные формы без острых углов и граней.'}/>}
                                                    block3={<Button title={'Читать далее'}
                                                                    onclickButtonHandler={onclickButtonPage3Handler}/>}
                                                    block4={<Button title={'Назад'}
                                                                    onclickButtonHandler={onclickButtonPage1Handler}/>}
                                                    block5={<Button title={'На главную'}
                                                                    onclickButtonHandler={onclickButtonMainHandler}/>}/>}/>
                <Route path="/page3" element={<Main block1={<Image image={mustang} alt={'car'}/>}
                                                    block2={<Button title={'Купить'}
                                                                    onclickButtonHandler={onclickButtonPage3Handler}/>}
                                                    block3={<Image image={mustang2} alt={'car'}/>}
                                                    block4={<Button title={'Купить'}
                                                                    onclickButtonHandler={onclickButtonPage3Handler}/>}
                                                    block5={<Button title={'На главную'} onclickButtonHandler={onclickButtonMainHandler}/>}/>}/>


            </Routes>

        </div>
    );
}

export default App;
