import React from 'react';

export default function OurLocations() {
  return (
    <>
    <div  style={{ display:'flex', justifyContent:'center',margin:'50px'}}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.721058841202!2d21.469316176013503!3d42.45495077118429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d5a468d30f1%3A0x48866340f0eec3f4!2sKFC%20Gjilan!5e0!3m2!1sen!2s!4v1684459812096!5m2!1sen!2s"
                width="700"
                height="550"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </>
  );
}
