import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import pill from '../../../img/pills.png';
import bandageIcon from '../../../img/bandage.png';
import close from '../../../img/close.png';
import timeIcon from '../../../img/Time.png';
import frequencyIcon from '../../../img/frequency.png';
import cashIcon from '../../../img/cash.png';
import interactionIcon from '../../../img/interaction.png';
import drugIcon from '../../../img/drug.png';
import IPDRoomIcon from '../../../img/IPDRoom.png';
import medicineIcon from '../../../img/medicine.png';
import dosebindIcon from '../../../img/dosebind.png';
import medicineBindIcon from '../../../img/medicineBind.png';
import rightdoseIcon from '../../../img/rightdose.png';
import TMTIcon from '../../../img/TMT.png';
import ArdIcon from '../../../img/Ard.png';
import noteIcon from '../../../img/note.png';
import noteIcon1 from '../../../img/note1.png';
import noteIcon2 from '../../../img/note2.png';
import IVRoomIcon2 from '../../../img/IVRoom.png';
import locationIcon from '../../../img/Location.png';
import drugIcon2 from '../../../img/drug2.png';
import checkupIcon from '../../../img/checkup.png';
import waterIcon from '../../../img/water.png';
import treatment from '../../../img/treatment.png';
import sideeffect from '../../../img/sideeffect.png';
import effectgrade from '../../../img/effectgrade.png';
import appointment from '../../../img/appointment.png';
import createDose from '../../../img/createDose.png';
import createDoseG from '../../../img/createdose2.png';

import Modal from 'react-modal';
import { FaLessThan } from 'react-icons/fa6';
Modal.setAppElement('#root');

export default function ManageDoseData(isOpen, onClose, onConfirm) {
  const [modalGoMainDose, setModalGoMainDose] = useState(false); //ข้อมูลยาหลัก
  const [modalUseDose, setModalUseDose] = useState(false); //วิธีใช้ยา
  const [modalFrequency, setModalFrequency] = useState(false); //ความถี่
  const [modalPrice, setModalPrice] = useState(false); //ราคายา
  const [modalTime, setModalTime] = useState(false); //เวลา
  const [modalInteraction, setModalInteraction] = useState(false); //Drug Interaction
  const [modalSubUnit, setModalSubUnit] = useState(false); //หน่อยย่อย
  const [modalSaleUnit, setModalSaleUnit] = useState(false); //หน่อยขาย
  const [modalPharmacology, setModalPharmacology] = useState(false); //Pharmacology
  const [modalBindDoseWithHand, setModalBindDoseWithHand] = useState(false); //ผูกวิธีใช้กับยา
  const [modalBindHandbook, setModalBindHandbook] = useState(false); //ผูกวิธีใช้
  const [modalBindWithRight, setModalBindWithRight] = useState(false); //ผูกยากับสิทธิ์ห้ามใช้
  const [modalArdGroud, setModalArdGroud] = useState(false); //กลุ่มแพ้ยา
  const [modalTMT, setModalTMT] = useState(false); //TMT
  const [modalOrder, setModalOrder] = useState(false); //ระเบียบ
  const [modalIndication, setModalIndication] = useState(false); //Indication PTC
  const [modalTypeOrder, setModalTypeOrder] = useState(false); //ประเภทตามระเบียบ PTC
  const [modalMapId, setModalMapId] = useState(false); //Map รหัสยาโปรแกรมUnitdose
  const [modalLocation, setModalLocation] = useState(false); //Location
  const [modalDrugProtocal, setModalDrugProtocal] = useState(false); //Drug Protocal
  const [modalMelt, setModalMelt] = useState(false); //ตัวทำละลาย
  const [modalDiagnose, setModalDiagnose] = useState(false); //วินิจฉัยโรค
  const [modalTreatmentProtocal, setModalTreatmentProtocal] = useState(false); //Treatment Protocal
  const [modalSideEffect, setModalSideEffect] = useState(false); //Side Effect
  const [modalSideEffectGrade, setModalSideEffectGrade] = useState(false); //Side Effect grade
  const [modalAppointmentCard, setModalAppointmentCard] = useState(false); //สร้างบตรนัด
  const [modalCreateDose, setModalCreateDose] = useState(false); //การผลิตยา
  const [modalCreateDoseGeneral, setModalCreateDoseGeneral] = useState(false); //การผลิตยาทั่วไป

  const namePage = 'หน้าข้อมูลยาหลัก';

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[5%] border-b-2 border-collapse border-gray-300 flex items-center px-3 text-lg">
        หน้าข้อมูลยาหลัก
      </div>
      <div className="w-[100%] bg-white flex flex-wrap p-2">
        <ButtonWithMenu
          icon={pill}
          label={`ข้อมูลยาหลัก`}
          modal={() => setModalGoMainDose(true)}
        />
        <ButtonWithMenu
          icon={bandageIcon}
          label={`วิธีใช้ยา`}
          modal={() => setModalUseDose(true)}
        />
        <ButtonWithMenu
          icon={frequencyIcon}
          label={`ความถี่`}
          modal={() => setModalFrequency(true)}
        />
        <ButtonWithMenu
          icon={timeIcon}
          label={`เวลา`}
          modal={() => setModalTime(true)}
        />
        <ButtonWithMenu
          icon={cashIcon}
          label={`ราคายา`}
          modal={() => setModalPrice(true)}
        />
        <ButtonWithMenu
          icon={interactionIcon}
          label={`Drug Interaction`}
          modal={() => setModalInteraction(true)}
        />
        <ButtonWithMenu
          icon={drugIcon}
          label={`หน่อยย่อย`}
          modal={() => setModalSubUnit(true)}
        />
        <ButtonWithMenu
          icon={IPDRoomIcon}
          label={`หน่วยขาย`}
          modal={() => setModalSaleUnit(true)}
        />
        <ButtonWithMenu
          icon={medicineIcon}
          label={`Pharmacology`}
          modal={() => setModalPharmacology(true)}
        />
        <ButtonWithMenu
          icon={dosebindIcon}
          label={`ผูกวิธีใช้กับยา`}
          modal={() => setModalBindDoseWithHand(true)}
        />
        <ButtonWithMenu
          icon={medicineBindIcon}
          label={`ผูกวิธีใช้`}
          modal={() => setModalBindHandbook(true)}
        />
        <ButtonWithMenu
          icon={rightdoseIcon}
          label={`ผูกยากับสิทธิ์ห้ามใช้`}
          modal={() => setModalBindWithRight(true)}
        />
        <ButtonWithMenu
          icon={ArdIcon}
          label={`กลุ่มแพ้ยา`}
          modal={() => setModalArdGroud(true)}
        />
        <ButtonWithMenu
          icon={TMTIcon}
          label={`TMT`}
          modal={() => setModalTMT(true)}
        />
        <ButtonWithMenu
          icon={noteIcon}
          label={`ระเบียบ`}
          modal={() => setModalOrder(true)}
        />
        <ButtonWithMenu
          icon={noteIcon1}
          label={`Indication PTC`}
          modal={() => setModalIndication(true)}
        />

        <ButtonWithMenu
          icon={noteIcon2}
          label={`ประเภทตามระเบียบ PTC`}
          modal={() => setModalTypeOrder(true)}
        />
        <ButtonWithMenu
          icon={IVRoomIcon2}
          label={`Map รหัสยาโปรแกรมUnitdose`}
          modal={() => setModalMapId(true)}
        />
        <ButtonWithMenu
          icon={locationIcon}
          label={`Location`}
          modal={() => setModalLocation(true)}
        />
        <ButtonWithMenu
          icon={drugIcon2}
          label={`Drug Protocal`}
          modal={() => setModalDrugProtocal(true)}
        />
      </div>
      <div className="w-full h-[5%] border-b-2 border-collapse border-gray-300 flex items-center px-3 text-lg">
        หน้าข้อมูลยาผลิต
      </div>
      <div className="w-[100%] bg-white flex flex-wrap p-2">
        <ButtonWithMenu
          icon={waterIcon}
          label={`ตัวทำละลาย`}
          modal={() => setModalMelt(true)}
        />
        <ButtonWithMenu
          icon={checkupIcon}
          label={`วินิจฉัยโรค`}
          modal={() => setModalDiagnose(true)}
        />
        <ButtonWithMenu
          icon={treatment}
          label={`Treatment Protocal`}
          modal={() => setModalTreatmentProtocal(true)}
        />
        <ButtonWithMenu
          icon={sideeffect}
          label={`Side Effect`}
          modal={() => setModalSideEffect(true)}
        />
        <ButtonWithMenu
          icon={effectgrade}
          label={`Side Effect Grade`}
          modal={() => setModalSideEffectGrade(true)}
        />
        <ButtonWithMenu
          icon={appointment}
          label={`สร้างบัตรนัด`}
          modal={() => setModalAppointmentCard(true)}
        />
        <ButtonWithMenu
          icon={createDose}
          label={`การผลิตยา`}
          modal={() => setModalCreateDose(true)}
        />
        <ButtonWithMenu
          icon={createDoseG}
          label={`การผลิตยาทั่วไป`}
          modal={() => setModalCreateDoseGeneral(true)}
        />
      </div>
      <div className="w-[100%] h-[40%] bg-white flex flex-wrap space-x-1 p-2"></div>
      {/*ข้อมูลยาหลัก*/}
      <Modal
        isOpen={modalGoMainDose}
        onRequestClose={() => setModalGoMainDose(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ข้อมูลยาหลัก`}
            closePage={() => setModalGoMainDose(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*วิธีการใช้ยา*/}
      <Modal
        isOpen={modalUseDose}
        onRequestClose={() => setModalUseDose(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> วิธีใช้ยา`}
            closePage={() => setModalUseDose(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ความถี่*/}
      <Modal
        isOpen={modalFrequency}
        onRequestClose={() => setModalFrequency(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ความถี่`}
            closePage={() => setModalFrequency(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*เวลา*/}
      <Modal
        isOpen={modalTime}
        onRequestClose={() => setModalTime(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> เวลา`}
            closePage={() => setModalTime(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ราคายา*/}
      <Modal
        isOpen={modalPrice}
        onRequestClose={() => setModalPrice(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ราคายา`}
            closePage={() => setModalPrice(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Drug Interaction*/}
      <Modal
        isOpen={modalInteraction}
        onRequestClose={() => setModalInteraction(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Drug Interaction`}
            closePage={() => setModalInteraction(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*หน่วยย่อย*/}
      <Modal
        isOpen={modalSubUnit}
        onRequestClose={() => setModalSubUnit(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> หน่วยย่อย`}
            closePage={() => setModalSubUnit(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*หน่วยขาย*/}
      <Modal
        isOpen={modalSaleUnit}
        onRequestClose={() => setModalSaleUnit(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> หน่วยขาย`}
            closePage={() => setModalSaleUnit(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Pharmacology*/}
      <Modal
        isOpen={modalPharmacology}
        onRequestClose={() => setModalPharmacology(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Pharmacology`}
            closePage={() => setModalPharmacology(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ผูกวิธีใช้กับยา*/}
      <Modal
        isOpen={modalBindDoseWithHand}
        onRequestClose={() => setModalBindDoseWithHand(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ผูกวิธีใช้กับยา`}
            closePage={() => setModalBindDoseWithHand(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ผูกวิธีใช้*/}
      <Modal
        isOpen={modalBindHandbook}
        onRequestClose={() => setModalBindHandbook(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ผูกวิธีใช้`}
            closePage={() => setModalBindHandbook(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ผูกยากับสิทธิ์ห้ามใช้*/}
      <Modal
        isOpen={modalBindWithRight}
        onRequestClose={() => setModalBindWithRight(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ผูกยากับสิทธิ์ห้ามใช้`}
            closePage={() => setModalBindWithRight(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*กลุ่มแพ้ยา*/}
      <Modal
        isOpen={modalArdGroud}
        onRequestClose={() => setModalArdGroud(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> กลุ่มแพ้ยา`}
            closePage={() => setModalArdGroud(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*TMT*/}
      <Modal
        isOpen={modalTMT}
        onRequestClose={() => setModalTMT(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> TMT`}
            closePage={() => setModalTMT(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ระเบียบ*/}
      <Modal
        isOpen={modalOrder}
        onRequestClose={() => setModalOrder(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ระเบียบ`}
            closePage={() => setModalOrder(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Indication PTC*/}
      <Modal
        isOpen={modalIndication}
        onRequestClose={() => setModalIndication(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Indication PTC`}
            closePage={() => setModalIndication(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ประเภทตามระเบียบ PTC*/}
      <Modal
        isOpen={modalTypeOrder}
        onRequestClose={() => setModalTypeOrder(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ประเภทตามระเบียบ PTC`}
            closePage={() => setModalTypeOrder(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Map รหัสยาโปรแกรมUnitdose*/}
      <Modal
        isOpen={modalMapId}
        onRequestClose={() => setModalMapId(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Map รหัสยาโปรแกรม Unitdose`}
            closePage={() => setModalMapId(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Location*/}
      <Modal
        isOpen={modalLocation}
        onRequestClose={() => setModalLocation(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Location`}
            closePage={() => setModalLocation(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*Drug Protocal*/}
      <Modal
        isOpen={modalDrugProtocal}
        onRequestClose={() => setModalDrugProtocal(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Drug Protocal`}
            closePage={() => setModalDrugProtocal(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*ตัวทำละลาย*/}
      <Modal
        isOpen={modalMelt}
        onRequestClose={() => setModalMelt(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> ตัวทำละลาย`}
            closePage={() => setModalMelt(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*วินิจฉัยโรค*/}
      <Modal
        isOpen={modalDiagnose}
        onRequestClose={() => setModalDiagnose(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> วินิจฉัยโรค`}
            closePage={() => setModalDiagnose(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/*treatment protocal*/}
      <Modal
        isOpen={modalTreatmentProtocal}
        onRequestClose={() => setModalTreatmentProtocal(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Treatment Protocal`}
            closePage={() => setModalTreatmentProtocal(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/* Side Effect */}
      <Modal
        isOpen={modalSideEffect}
        onRequestClose={() => setModalSideEffect(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Side Effect `}
            closePage={() => setModalSideEffect(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/* Side Effect Grade*/}
      <Modal
        isOpen={modalSideEffectGrade}
        onRequestClose={() => setModalSideEffectGrade(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> Side Effect Grade`}
            closePage={() => setModalSideEffectGrade(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/* สร้างบัตรนัด */}
      <Modal
        isOpen={modalAppointmentCard}
        onRequestClose={() => setModalAppointmentCard(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> สร้างบัตรนัด`}
            closePage={() => setModalAppointmentCard(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/* การผลิตยา */}
      <Modal
        isOpen={modalCreateDose}
        onRequestClose={() => setModalCreateDose(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> การผลิตยา`}
            closePage={() => setModalCreateDose(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
      {/* การผลิตยาทั้่วไป */}
      <Modal
        isOpen={modalCreateDoseGeneral}
        onRequestClose={() => setModalCreateDoseGeneral(false)}
        className=" z-10 w-[80%] h-[80%] bg-white flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="h-full w-full">
          <HeaderModal
            label={`ตั้งค่า >> ${namePage} >> การผลิตยาทั่วไป`}
            closePage={() => setModalCreateDoseGeneral(false)}
          />
          <div className="w-full h-[95%]">{'fucntion'}</div>
        </div>
      </Modal>
    </div>
  );
}

const ButtonWithMenu = ({ icon, label, modal }) => {
  return (
    <button
      className={`m-1 w-32 h-24 px-2 text-black font-bold space-y-2 bg-white border border-collapse border-black hover:bg-slate-200 active:bg-slate-300 flex flex-col items-center justify-start pt-5`}
      onClick={modal}
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      <span>{label}</span>
    </button>
  );
};
const HeaderModal = ({ label, closePage }) => {
  return (
    <div className="w-full h-[7%] py-2 bg-gray-500 flex items-center justify-between px-5 ">
      <span className="text-lg text-white font-bold">{label}</span>
      <button
        className="w-[30px] h-[70%] hover:border-[3px] hover:border-gray-400"
        onClick={closePage}
      >
        <img src={close} alt="รูป" className="w-full h-full" />
      </button>
    </div>
  );
};
