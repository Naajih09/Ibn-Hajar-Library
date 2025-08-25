export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-[Amiri] text-right text-gray-800 animate-fadeIn">
      
      
      <div className="bg-blue-900 text-white p-6 rounded-lg mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">عن مكتبة ابن حجر</h1>
        <p className="text-lg">منصة رقمية لنشر العلم الشرعي وتيسير الوصول إلى الكتب الإسلامية</p>
      </div>

      
      <div className="flex justify-center mb-6">
        <img
          src="/covers/Logo.png" 
          alt="ابن حجر العسقلاني"
          className="w-40 h-40 object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-2"> الرسالة</h2>
        <p className="text-lg leading-relaxed">
          تهدف مكتبة ابن حجر إلى توفير مصادر علمية موثوقة في مجالات الحديث، الفقه، وأصوله، من خلال واجهة عربية سهلة الاستخدام.
          تم تطوير هذا المشروع كجزء من مشروع التخرج لبرنامج ALX لتطوير البرمجيات، ويعكس شغفي بالعلم الشرعي والتقنية الحديثة.
        </p>
      </section>

      
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">الميزات</h2>
        <ul className="list-disc pr-6 text-lg leading-relaxed">
          <li>عرض الكتب بصيغة PDF مع إمكانية القراءة أو التحميل</li>
          <li>واجهة عربية بالكامل تناسب المستخدمين في العالم الإسلامي</li>
          <li>تصميم بسيط وسريع باستخدام React و Tailwind CSS</li>
          <li>بحث سريع عن الكتب المضافة حديثاً</li>
        </ul>
      </section>

      
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-2"> الرؤية المستقبلية</h2>
        <p className="text-lg leading-relaxed">
          نطمح إلى تطوير المكتبة لتشمل ميزات إضافية مثل حسابات المستخدمين، التوصيات الذكية، وإمكانية إضافة كتب جديدة من قبل المجتمع.
          كما نعمل على تحسين تجربة المستخدم وتوسيع قاعدة المحتوى.
        </p>
      </section>

      
      <section className="mb-6">
        <blockquote className="border-r-4 border-blue-600 pr-4 italic text-gray-600">
          "من يرد الله به خيراً يفقهه في الدين" – النبي محمد ﷺ
        </blockquote>
      </section>

      
      <section className="mb-6">
        <p className="text-lg leading-relaxed">
          هذا المشروع هو ثمرة شغفي بالعلم الشرعي والتقنية، وأتمنى أن يكون نافعاً لكل طالب علم وباحث.
          نسأل الله أن يجعل هذا العمل خالصاً لوجهه الكريم، وأن ينفع به الأمة الإسلامية.
        </p>
      </section>

      
      
      <div className="text-sm text-gray-600 text-center mt-8 border-t pt-4 space-y-2">
  <p> للتواصل: <a href="mailto:naajihibnsiraj@gmail.com" className="text-blue-700 hover:underline">naajihibnsiraj@gmail.com</a></p>
  <p> <a href="https://github.com/Naajih09/Ibn-Hajar-Library" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">عرض المشروع على GitHub</a></p>
  <p>تم تطوير هذا المشروع بواسطة ناجح سراج، كجزء من مشروع التخرج لبرنامج ALX لتطوير البرمجيات.</p>
  
</div>


    </div>
  );
}
