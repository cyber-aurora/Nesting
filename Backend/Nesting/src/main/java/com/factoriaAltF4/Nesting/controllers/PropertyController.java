package com.factoriaAltF4.Nesting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.services.ImageService;
import com.factoriaAltF4.Nesting.services.PropertyService;

@RestController
@RequestMapping("/properties")
public class PropertyController {
    
    @Autowired
    PropertyService service;

    @Autowired
    ImageService imgService;

    @GetMapping
    public List<Property> getAllProperties(){
        return service.getAllProperties();
    }

    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable Long id){
        return service.getPropertyById(id);
    }
    
    @PostMapping("/create")
    public ResponseEntity<Property> addProperty(@RequestBody Property property){
        Property savedProperty = service.addProperty(property);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProperty);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Property> updateProperty(@RequestBody Property property, @PathVariable Long id){
        Property propToUpdate = service.getPropertyById(id);
        service.updateProperty(propToUpdate);
        return ResponseEntity.ok(propToUpdate);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProperty(Property property, @PathVariable Long id){
        service.deleteProperty(property, id);
    }

    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<Property> updateStatus(@PathVariable Long id, @RequestParam boolean newStatus){
        Property updatedProp = service.updateStatus(id, newStatus);
        return ResponseEntity.ok(updatedProp);
    }

    @PostMapping("/{id}/addimage")
    public Property addImageToPorperty(@PathVariable Long id, @RequestParam String img, @RequestBody Image image){
        imgService.addImage(image);
        return service.addImageToProp(img, id, image);
    }
}
