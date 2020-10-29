function identifier() {
    var osmUrl = {changeset: "http://www.openstreetmap.org/changeset/",
                   relation: "http://www.openstreetmap.org/relation/",
                   way: "http://www.openstreetmap.org/way/",
                   node: "http://www.openstreetmap.org/node/"};

    var josmUrl = {changeset: "http://localhost:8111/import?url=https://www.openstreetmap.org/api/0.6/changeset/",
                   relation: "http://localhost:8111/import?url=https://www.openstreetmap.org/api/0.6/relation/",
                   way: "http://localhost:8111/import?url=https://www.openstreetmap.org/api/0.6/way/",
                   node: "http://localhost:8111/import?url=https://www.openstreetmap.org/api/0.6/node/",
                   lastUrl: "/download"};

    var deephistoryUrl = {relation: "https://osmlab.github.io/osm-deep-history/#/relation/",
                           way: "https://osmlab.github.io/osm-deep-history/#/way/",
                           node: "https://osmlab.github.io/osm-deep-history/#/node/"};

    var pewuUrl = {relation: "https://pewu.github.io/osm-history/#/relation/",
                    way: "https://pewu.github.io/osm-history/#/way/",
                    node: "https://pewu.github.io/osm-history/#/node/"};
    
    var changesetType = document.getElementById("changeset");
    var relationType = document.getElementById("relation");
    var wayType = document.getElementById("way");
    var nodeType = document.getElementById("node");

    var identifier = document.getElementById("identifier").value;
    var id = document.getElementById("input-id").value;

    //alert for null
    if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === false ) && !(identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && (id === "")) {
        alert("Please select id type, identifier and input id!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === true ) && !(identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && (id === "")) {
        alert("Please select identifier and input id!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === false ) && (identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && (id === "")) {
        alert("Please select id type and input id!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === false ) && !(identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && !(id === null)) {
        alert("Please select id type and identifier!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === false ) && (identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && !(id === null)) {
        alert("Please select id type!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === true ) && !(identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && !(id === null)) {
        alert("Please select identifier!");
    } else if (((changesetType.checked || relationType.checked || wayType.checked || nodeType.checked) === true ) && (identifier === ("osm" || "josm" || "deepHistory" || "pewu")) && (id === "")) {
        alert("Please input id!");
    }
    //changeset
    else if (identifier === "osm" && changesetType.checked === true) {
        var search = osmUrl.changeset + id;
        window.location.href = search;
    } else if (identifier === "josm" && changesetType.checked === true) {
        var search = josmUrl.changeset + id + josmUrl.lastUrl;
        window.location.href = search;
    } else if (identifier === "deepHistory" && changesetType.checked === true) {
        alert("Not available");
    } else if (identifier === "pewu" && changesetType.checked === true) {
        alert("Not available");
    }
    //relation
    else if (identifier === "osm" && relationType.checked === true) {
        var search = osmUrl.relation + id;
        window.location.href = search;
    } else if (identifier === "josm" && relationType.checked === true) {
        var search = josmUrl.relation + id + josmUrl.lastUrl;
        window.location.href = search;
    } else if (identifier === "deepHistory" && relationType.checked === true) {
        var search = deephistoryUrl.relation + id;
        window.location.href = search;
    } else if (identifier === "pewu" && relationType.checked === true) {
        var search = pewuUrl.relation + id;
        window.location.href = search;
    }
    //way
    else if (identifier === "osm" && wayType.checked === true) {
        var search = osmUrl.way + id;
        window.location.href = search;
    } else if (identifier === "josm" && wayType.checked === true) {
        var search = josmUrl.way + id + josmUrl.lastUrl;
        window.location.href = search;
    } else if (identifier === "deepHistory" && wayType.checked === true) {
        var search = deephistoryUrl.way + id;
        window.location.href = search;
    } else if (identifier === "pewu" && wayType.checked === true) {
        var search = pewuUrl.way + id;
        window.location.href = search;
    }
    //node
    else if (identifier === "osm" && nodeType.checked === true) {
        var search = osmUrl.node + id;
        window.location.href = search;
    } else if (identifier === "josm" && nodeType.checked === true) {
        var search = josmUrl.node + id + josmUrl.lastUrl;
        window.location.href = search;
    } else if (identifier === "deepHistory" && nodeType.checked === true) {
        var search = deephistoryUrl.node + id;
        window.location.href = search;
    } else if (identifier === "pewu" && nodeType.checked === true) {
        var search = pewuUrl.node + id;
        window.location.href = search;
    };
}