import React from 'react';
import '../index.css';
import { motion, useScroll, useSpring } from 'framer-motion';

const MotionScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis
        perspiciatis accusantium quo sunt consequuntur eaque? Facilis
        repellendus suscipit officiis velit voluptatibus, libero odio
        voluptates! Aliquam corporis qui distinctio amet. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Non, tenetur! Nam odit doloremque
        dignissimos dolorum autem adipisci in error debitis! Voluptatem enim
        quisquam consectetur laudantium perferendis? Sit commodi vitae
        temporibus error voluptatem odio quod quae quis ea quo. Unde, voluptates
        aspernatur! Animi, officia enim minus atque quia nostrum sunt. Iure
        optio nisi velit ut placeat natus quam iusto aliquid, modi repudiandae.
        Blanditiis, quis autem quisquam inventore cum provident? Tempora
        asperiores nesciunt esse nisi est excepturi provident alias dolor illo
        ducimus hic minima ea ipsa totam reiciendis, nemo at tenetur qui in
        necessitatibus quam debitis molestias, amet nulla. Assumenda,
        voluptatibus? Nemo nostrum, a iusto omnis dolore, atque laboriosam
        harum, debitis beatae adipisci excepturi quos perspiciatis mollitia
        necessitatibus eaque neque eligendi quia provident id esse. Ex
        dignissimos, deserunt eaque dolorum voluptatem fugiat nihil labore
        nostrum est laboriosam rem accusantium consequuntur non asperiores
        suscipit beatae at mollitia numquam veniam debitis officiis
        voluptatibus. Voluptates placeat sequi nam, necessitatibus porro at
        ducimus ratione debitis voluptatum sit aut veniam quas eius illo culpa
        quasi? Nisi eaque natus nihil ea et officiis dignissimos, pariatur
        voluptatem modi ullam, ab placeat vitae deserunt facere sed laboriosam
        sint illo tempore. Beatae deserunt ab a at repudiandae, inventore
        voluptatibus nostrum sunt ducimus iusto! Quam sunt optio sequi deleniti
        quaerat nemo dolores aut officia veritatis in voluptate, quisquam, ullam
        distinctio blanditiis provident architecto, dolorum at sapiente magni
        sit alias. Voluptatibus eos officia consequuntur ut. Nulla, quidem
        necessitatibus ipsam cum, et ipsum ratione laudantium sunt unde mollitia
        blanditiis? Assumenda quae pariatur dignissimos modi numquam repellat
        quidem harum? Fugit quia voluptas ducimus molestias omnis eum eius
        mollitia nobis temporibus dolorem, et voluptatibus assumenda, eligendi,
        atque commodi ex sequi. Cumque obcaecati quo distinctio laborum,
        eligendi, ducimus beatae enim doloremque vel maxime dolor, amet ea!
        Maxime, quos? Laborum ullam et incidunt cum animi ad laboriosam. Odit,
        et illum! Qui porro culpa blanditiis itaque odit exercitationem
        excepturi cumque sapiente quibusdam eum est non facilis cum mollitia vel
        eveniet numquam, aliquid consequuntur quia optio sunt. Adipisci debitis
        animi, eius nihil expedita ea modi quos consequatur minima saepe dolorem
        nisi architecto possimus officiis veniam alias aperiam quasi blanditiis
        minus velit nam, dicta, illum accusantium. Totam officiis laborum maxime
        aperiam expedita voluptates ab fugit modi aliquid ipsa sunt similique
        nemo reiciendis qui a eaque quasi ullam natus facere, autem dolore
        quibusdam. Explicabo similique voluptas autem eum architecto non
        dignissimos vero illo voluptate quaerat quia consequuntur culpa
        laboriosam, harum magni deleniti nobis obcaecati alias dicta, quo enim
        nostrum error doloribus aliquam? Eaque, architecto exercitationem
        dolores odit quibusdam facilis soluta accusamus eligendi ducimus? Facere
        illum explicabo accusamus quae deleniti eaque doloribus ea adipisci aut
        ducimus! Ratione aperiam natus repellendus, asperiores nemo omnis error.
        Nesciunt deleniti deserunt porro animi quia ad, corrupti cumque fuga
        laborum, unde ipsam perferendis aspernatur voluptas nulla iusto quod
        consequuntur quidem ut nemo rem laboriosam? Dolor facilis natus fugiat
        adipisci aut ratione tempore enim ullam minima a sapiente excepturi ipsa
        vitae quia soluta, dignissimos blanditiis placeat quibusdam ipsam odio
        laborum velit debitis corrupti vel. Repellat incidunt quos quae.
        Similique ut ad eligendi quidem asperiores quisquam itaque tempora
        aspernatur magni officiis nemo natus sit suscipit, accusamus doloremque
        dolore culpa aut dolor consectetur ducimus! Quia in, veniam illum
        incidunt quaerat dolorum, praesentium officiis a maiores tempora dolor
        veritatis blanditiis nihil ex optio exercitationem sunt culpa harum.
        Voluptatum perferendis repudiandae obcaecati repellat numquam deleniti
        tempore nobis enim minima temporibus dolorem voluptas alias, culpa
        molestias sapiente, maxime odit labore. Laboriosam velit vitae
        consequatur autem. Animi aliquam dicta qui! Ad ipsam necessitatibus
        numquam quo maxime expedita nam, esse asperiores vel ullam, modi hic
        mollitia. Explicabo asperiores temporibus expedita. Iste molestiae,
        corporis possimus mollitia eligendi commodi voluptatum consectetur,
        obcaecati praesentium optio voluptas sint ratione! Reiciendis magnam
        voluptas corrupti odit facere consequuntur ipsum itaque ducimus, quas
        libero! Magnam aut libero corporis mollitia magni illum in nostrum
        voluptatum iste obcaecati veniam, fugiat tempora, labore corrupti.
        Maiores exercitationem non incidunt atque ipsum facere corporis
        blanditiis corrupti quisquam veritatis autem laboriosam dolorem libero
        aspernatur veniam, doloremque velit impedit sapiente cum eveniet
        adipisci, consequuntur natus. Impedit sed consectetur animi maxime!
        Tenetur earum minus error ea, corrupti quam. Libero esse dicta odit
        velit est nulla aut facilis dolor, obcaecati aperiam quasi, eveniet
        molestiae deleniti soluta. Sint iste amet rerum consectetur nisi cumque
        officiis eum officia adipisci, minus saepe, fuga perferendis temporibus
        quae? Vitae cumque veritatis dolores officiis voluptatem magnam.
        Sapiente provident voluptatibus accusantium reprehenderit minus ipsa
        omnis. Rerum, eaque possimus voluptate alias autem totam quod eos eius
        rem voluptas, similique, doloremque nesciunt accusantium aut maxime
        voluptatibus qui praesentium quos quae ratione deleniti iure incidunt
        perspiciatis. Reprehenderit, rerum. Magni, tempora illo velit sequi
        maxime hic, assumenda perferendis, eum necessitatibus optio est suscipit
        deleniti natus nihil nemo exercitationem ad obcaecati sit officia.
        Sapiente soluta dolore iusto minima in quasi aliquid hic omnis repellat
        quaerat ad, inventore possimus veritatis dignissimos sint fugit enim
        fugiat. Dolorem laborum veniam, quisquam possimus quo molestias a
        maiores explicabo delectus minus. Ratione eaque sit explicabo, soluta ab
        atque nisi ducimus eum, aspernatur minus amet architecto. Consequatur
        recusandae ipsum dolore alias accusantium fuga? Delectus fugit velit
        dignissimos porro hic aliquam doloribus exercitationem quod amet, a iste
        tenetur pariatur libero, reprehenderit veniam aliquid rerum molestias
        explicabo sit? Ab consequatur suscipit voluptates voluptatibus magni
        molestiae corrupti, ipsa qui corporis dolorem quas et neque asperiores
        possimus praesentium animi impedit eum accusamus repellat? Maxime soluta
        nam omnis animi deleniti dolorum quas nemo architecto magni natus,
        debitis quasi dicta tempore id voluptas iste saepe, laboriosam libero
        optio ab consequatur? Dolorem aspernatur voluptatum rerum minima unde
        necessitatibus! Accusamus enim modi temporibus quibusdam numquam vitae
        cupiditate. Distinctio libero aspernatur a explicabo tenetur voluptate,
        adipisci quam quasi soluta. Dolor natus facilis illum dicta minus culpa
        optio repellat, aspernatur doloremque, dolorum, eveniet itaque provident
        magni dolorem laborum molestiae? In iusto blanditiis quisquam obcaecati
        debitis totam inventore provident accusantium perferendis voluptatibus
        quibusdam, esse soluta aspernatur itaque error exercitationem deleniti.
        Voluptatibus beatae placeat ducimus saepe aliquam. Numquam voluptates
        excepturi sed, voluptas in, commodi incidunt minus vero aliquid dolore
        iste, deserunt quia qui. Ipsa, sed saepe dolor consequatur ad quod eum
        doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nemo similique necessitatibus consectetur natus ut beatae provident
        ipsam saepe veniam libero nam deserunt suscipit, harum a dolore maiores
        quae fugit? Expedita in esse obcaecati voluptatibus, cumque eligendi
        dolorem fuga harum aspernatur dolore illum optio eius quibusdam nisi at
        corporis repellat molestias, facilis inventore, ducimus itaque nesciunt
        quidem hic deserunt! Tempora, culpa! Rerum deserunt voluptatem harum
        reprehenderit cumque nam asperiores, minima quae eius! Saepe nesciunt,
        iste nostrum eius dicta totam distinctio eaque reprehenderit doloremque
        dolorum? Cupiditate, inventore nihil voluptas ad ratione optio earum
        maiores pariatur? Asperiores, itaque fugiat quia possimus commodi quo
        suscipit saepe nostrum rerum sit explicabo dolores aperiam perspiciatis
        totam natus odit ea nemo est nobis nisi? Illo qui perspiciatis deserunt,
        nesciunt nostrum illum facilis eos, ducimus minus est aut eligendi
        voluptate quisquam blanditiis quae? Deserunt nisi, repellendus omnis
        numquam enim tenetur pariatur? Sint, ipsum harum labore velit voluptates
        animi temporibus porro cum aliquam consectetur? Debitis mollitia harum,
        dolorum eveniet non quam enim ipsam optio ab atque nisi vero odit sequi
        animi aperiam alias odio culpa possimus expedita nulla ad reprehenderit
        soluta, labore saepe? Assumenda commodi porro, nostrum perferendis,
        debitis iusto error illum cupiditate blanditiis, perspiciatis asperiores
        exercitationem sit provident!
      </article>
    </div>
  );
};

export default MotionScroll;
