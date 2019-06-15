Dropzone.autoDiscover = false;

$(document).ready(function () {
    $(".upload-images").dropzone({
        addRemoveLinks: true,
        maxFilesize: 4,
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        paramName: "images",
        previewsContainer: ".dropzone-previews",
        clickable: ".upload-photos-icon",
        thumbnailWidth: 100,
        thumbnailHeight: 100,

        init: function () {
            let myDropzone = this;

            this.element.querySelector("input[type=submit]").addEventListener("click",function (e) {
                e.preventDefault();
                e.stopPropagation();
                myDropzone.processQueue();
            });

            this.on("successmultiple", function(files, response){
                window.location.reload();
            });

            this.on("errormultiple", function (files,resposne) {
                toastr.error(resposne);
            });
        }
    })
});