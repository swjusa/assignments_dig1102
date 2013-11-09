```
// here are examples of fuctions with arguements  text:  fuction(test)
jQuery.fn.extend({
        text: function( text ) {
                if ( jQuery.isFunction(text) ) {
                        return this.each(function(i) {
                                var self = jQuery(this);
                                self.text( text.call(this, i, self.text()) );
                        });
                }

                if ( typeof text !== "object" && text !== undefined ) {
                        return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
                }

                return jQuery.text( this );
        },
// here are examples of fuctions with arguements  WrapAll:  fuction(html)
        wrapAll: function( html ) {
                if ( jQuery.isFunction( html ) ) {
                        return this.each(function(i) {
                                jQuery(this).wrapAll( html.call(this, i) );
                        });
                }

                if ( this[0] ) {
                        // The elements to wrap the target around
                        var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

                        if ( this[0].parentNode ) {
                                wrap.insertBefore( this[0] );
                        }

                        wrap.map(function() {
                                var elem = this;

                                while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                                        elem = elem.firstChild;
                                }

                                return elem;
                        }).append(this);
                }

                return this;
        },

        wrapInner: function( html ) {
                if ( jQuery.isFunction( html ) ) {
                        return this.each(function(i) {
                                jQuery(this).wrapInner( html.call(this, i) );
                        });
                }

                return this.each(function() {
                        var self = jQuery( this ), contents = self.contents();

                        if ( contents.length ) {
                                contents.wrapAll( html );

                        } else {
                                self.append( html );
                        }
                });
        },

        wrap: function( html ) {
                return this.each(function() {
                        jQuery( this ).wrapAll( html );
                });
        },

        unwrap: function() {
                return this.parent().each(function() {
                        if ( !jQuery.nodeName( this, "body" ) ) {
                                jQuery( this ).replaceWith( this.childNodes );
                        }
                }).end();
        },

        append: function() {
                return this.domManip(arguments, true, function( elem ) {
                        if ( this.nodeType === 1 ) {
                                this.appendChild( elem );
                        }
                });
        },

        prepend: function() {
                return this.domManip(arguments, true, function( elem ) {
                        if ( this.nodeType === 1 ) {
                                this.insertBefore( elem, this.firstChild );
                        }
                });
        },

        before: function() {
                if ( this[0] && this[0].parentNode ) {
                        return this.domManip(arguments, false, function( elem ) {
                                this.parentNode.insertBefore( elem, this );
                        });
                } else if ( arguments.length ) {
                        var set = jQuery(arguments[0]);
                        set.push.apply( set, this.toArray() );
                        return this.pushStack( set, "before", arguments );
                }
        },

        after: function() {
                if ( this[0] && this[0].parentNode ) {
                        return this.domManip(arguments, false, function( elem ) {
                                this.parentNode.insertBefore( elem, this.nextSibling );
                        });
                } else if ( arguments.length ) {
                        var set = this.pushStack( this, "after", arguments );
                        set.push.apply( set, jQuery(arguments[0]).toArray() );
                        return set;
                }
        },
        
        // keepData is for internal use only--do not document
// // here are examples of fuctions with 2 arguements  remove:  fuction(selector, keepData)        
        remove: function( selector, keepData ) {
                for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
                        if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
                                if ( !keepData && elem.nodeType === 1 ) {
                                        jQuery.cleanData( elem.getElementsByTagName("*") );
                                        jQuery.cleanData( [ elem ] );
                                }

                                if ( elem.parentNode ) {
                                         elem.parentNode.removeChild( elem );
                                }
                        }
                }
                
                return this;
        },

        empty: function() {
                for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
                        // Remove element nodes and prevent memory leaks
                        if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( elem.getElementsByTagName("*") );
                        }

                        // Remove any remaining nodes
                        while ( elem.firstChild ) {
                                elem.removeChild( elem.firstChild );
                        }
                }
                
                return this;
        },

```