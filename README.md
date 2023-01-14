<h1>Shopify_Clone</h1>
<p>
cloning Shopify application, using ready backend data in GraphQL form,
using React for a frontend, all application pages,
and components are 100% created using class component
</p>
<div>
  <h5>To Run GraphQl folder : </h5>
  <p> write yarn start || npm start in terminal </p>
  
  ---
  
  <h5>To Run React folder : </h5>
  <p> write in terminal yarn start || npm start </p>
  
  ---
  
  <h3> About Project </h3>
  <div>
    <h5> Technology </h5>
    <ul>
      <li>Redux-Toolkit</li>
      <li>Persist</li>
      <li>Apollo client</li>
    </ul>
    <h5> Idea </h5>
    <p>
      Ability to change the currency of the product in the application, even change the currency of the product you added to the cart.</br>
      The ability to change the attribute of the product that you want to buy on the product details page.</br>
      Increase and decrease the amount of a single product you want to buy, and that effecting of total price.</br>
      Ability to show the products the user added in the cart screen and cart popup on the main screen.</br>
    </p>
  </div>
  
  ---
  
  <h3> Problems I faced in the Project </h3>
  <p>
    It was a task implemented mainly in the Class component, using the apollo client to fetch GraphQL data.
    I faced some proplems in creating the whole app with the Class component, </br>
    1- as I can't use hooks in the Class component to
    dispatch and access state, for that I use <ins>connect</ins> which was fully described in my LINKEDIN post 
    https://www.linkedin.com/posts/hadeer-essam-03000b198_reactjs-react-project-activity-6986272223581900800-2XrS?utm_source=share&utm_medium=member_desktop</br>
    2- to get data from GraphQL, we normally use <ins>useQuery</ins> to get them, but In Class component it is hard to use this hook,
    so I find out after days of research that there is a method that can be used in Class component to get data, it imported from APOLLO-CLIENT but
    from a different path, and here is my post in LINKEDIN where I presented how can use it
    https://www.linkedin.com/posts/hadeer-essam-03000b198_introduction-to-apollo-client-activity-6986975213494132736-oxEN?utm_source=share&utm_medium=member_desktop
  </p>
</div>
