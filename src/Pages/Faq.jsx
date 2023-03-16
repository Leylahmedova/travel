
import Kecid from "../Components/Kecid";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Faq = () => {
  return (
    <div className="faq-section">
   <Kecid name="FAQ"/>
    <div className="question-section">
  
      <div className="accordion">
      <h2>Tez tez verilən suallar</h2>
      <div>

      <Accordion>
            <AccordionItem className="accordion_item">
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                        Uşaqlarla birgə səyahət
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Zəhmət olmasa, hər hansı qida tələbi və ya allergiya barədə rezervasiya zamanı bizə bildirin və biz məlumatı ötürəcəyik
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                       Otaqların tipləri
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Zəhmət olmasa, hər hansı qida tələbi və ya allergiya barədə rezervasiya zamanı bizə bildirin və biz məlumatı ötürəcəyik
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                       
                       Əlilliyim var - səfərə qatıla bilərəmmi?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Zəhmət olmasa, hər hansı qida tələbi və ya allergiya barədə rezervasiya zamanı bizə bildirin və biz məlumatı ötürəcəyik
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                       
                       Səyahət  zamanı nələrdən yararlana bilərəm?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Zəhmət olmasa, hər hansı qida tələbi və ya allergiya barədə rezervasiya zamanı bizə bildirin və biz məlumatı ötürəcəyik
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                       
                    Səfərimdə yemək necə olacaq?

                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Yemək səyahətin ən maraqlı hissələrindən biridir. Bəzi tanış tariflər ola bilər, lakin tez-tez kulinariya dünyasının yeni, maraqlı və açıq-aşkar qəribəliyi ilə qarşılaşacaqsınız.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                       Otaqların tipləri
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Zəhmət olmasa, hər hansı qida tələbi və ya allergiya barədə rezervasiya zamanı bizə bildirin və biz məlumatı ötürəcəyik
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    
    
    </div>

    


    
    
      </div>
      <div className="right-side">
        <div className="faq-topic">
          <h3>FAQ Mövzuları</h3>
          <div className="radio-group">          
          <input type="radio" id="general" name="eyni"/>
          <label htmlFor="general">Ümumi suallar</label>
          </div>
          <div className="radio-group"> 
          <input type="radio" id="Financial" name="eyni" />
          <label htmlFor="Financial">Finans mövzuları</label>
          </div>
          <div className="radio-group"> 
          <input type="radio" id="Privacy" name="eyni"/>
          <label htmlFor="Privacy">Ümumi suallar</label>
          </div>
          <div className="radio-group"> 
          <input type="radio" id="Other" name="eyni"/>
          <label htmlFor="Other">Digər suallar</label>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Faq