// $(function() {

//   $("input,textarea").jqBootstrapValidation({
//     preventSubmit: false,
//     submitError: function($form, event, errors) {
//             // additional error messages or events
//           },
//           submitSuccess: function($form, event) {
//             // Prevent spam click and default submit behaviour
//             $("#btnSubmit").attr("disabled", false);
//             event.preventDefault();
//             // get values from FORM
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var message = $("textarea#message").val();
//             $.ajax({
//               url: "/contact_forms",
//               type: "POST",
//               data: {
//                 name: name,
//                 email: email,
//                 message: message
//               },
//               cache: false,
//               success: function() {
//                     // Enable button & show success message
//                     $("#btnSubmit").attr("disabled", false);
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                     .append("</button>");
//                     $('#success > .alert-success')
//                     .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                     .append('</div>');

//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                   },
//                   error: function() {
//                     // Fail message
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                     .append("</button>");
//                     $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that my mail server is not responding. Please try again later!");
//                     $('#success > .alert-danger').append('</div>');
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                   },
//                 });
// },
// filter: function() {
//   return $(this).is(":visible");
// },
// });

// $("a[data-toggle=\"tab\"]").click(function(e) {
//   e.preventDefault();
//   $(this).tab("show");
// });
// });

// // When clicking on Full hide fail/success boxes
// $('#name').focus(function() {
//   $('#success').html('');
// });
