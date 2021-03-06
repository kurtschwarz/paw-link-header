const parseLinkHeader = header => header.split(',').reduce((links, part) => {
  const section = part.split(';');

  if (section.length < 2) {
    return links;
  }

  const url = section[0].replace(/<(.*)>/, '$1').trim();
  const rel = section[1].replace(/rel="(.*)"/, '$1').trim();
  links[rel] = url;
  return links;
}, {});

~function pawExtension() {
  class LinkHeaderDynamicValue {
    evaluate(ctx) {
      let lastExchange = this.linkHeaderRequest.getLastExchange();

      if (lastExchange && lastExchange.responseHeaders && lastExchange.responseHeaders['Link']) {
        const links = parseLinkHeader(lastExchange.responseHeaders['Link'] || '');

        if (links.hasOwnProperty(this.linkHeaderRel)) {
          return links[this.linkHeaderRel];
        }
      }

      return '';
    }

  }

  LinkHeaderDynamicValue.identifier = 'com.kurtschwarz.PawExtensions.LinkHeaderDynamicValue';
  LinkHeaderDynamicValue.title = 'Link Header';
  LinkHeaderDynamicValue.help = 'https://github.com/kurtschwarz/paw-link-header/issues';
  LinkHeaderDynamicValue.inputs = [InputField('linkHeaderRequest', 'Request', 'Request'), DynamicValueInput('linkHeaderRel', 'Rel', 'String')];
  registerDynamicValueClass(LinkHeaderDynamicValue);
}();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rSGVhZGVyRHluYW1pY1ZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sa0JBQW1CLE1BQUQsSUFBWSxPQUFPLEtBQVAsQ0FBYSxHQUFiLEVBQ2pDLE1BRGlDLENBQzFCLENBQUMsS0FBRCxFQUFRLElBQVIsS0FBaUI7QUFDdkIsUUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBaEI7O0FBRUEsTUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBTSxNQUFNLFFBQVEsQ0FBUixFQUFXLE9BQVgsQ0FBbUIsUUFBbkIsRUFBNkIsSUFBN0IsRUFBbUMsSUFBbkMsRUFBWjtBQUNBLFFBQU0sTUFBTSxRQUFRLENBQVIsRUFBVyxPQUFYLENBQW1CLFlBQW5CLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQVo7QUFFQSxRQUFNLEdBQU4sSUFBYSxHQUFiO0FBRUEsU0FBTyxLQUFQO0FBQ0QsQ0FkaUMsRUFjL0IsRUFkK0IsQ0FBcEM7O0FBZ0JBLENBQUUsU0FBUyxZQUFULEdBQXlCO0FBQ3pCLFFBQU0sc0JBQU4sQ0FBNkI7QUFTM0IsYUFBVSxHQUFWLEVBQWU7QUFDYixVQUFJLGVBQWUsS0FBSyxpQkFBTCxDQUF1QixlQUF2QixFQUFuQjs7QUFFQSxVQUFJLGdCQUFnQixhQUFhLGVBQTdCLElBQWdELGFBQWEsZUFBYixDQUE2QixNQUE3QixDQUFwRCxFQUEwRjtBQUN4RixjQUFNLFFBQVEsZ0JBQWdCLGFBQWEsZUFBYixDQUE2QixNQUE3QixLQUF3QyxFQUF4RCxDQUFkOztBQUVBLFlBQUksTUFBTSxjQUFOLENBQXFCLEtBQUssYUFBMUIsQ0FBSixFQUE4QztBQUM1QyxpQkFBTyxNQUFNLEtBQUssYUFBWCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEVBQVA7QUFDRDs7QUFyQjBCOztBQUF2Qix3QkFEbUIsQ0FFaEIsVUFGZ0IsR0FFSCxzREFGRztBQUNuQix3QkFEbUIsQ0FHaEIsS0FIZ0IsR0FHUixhQUhRO0FBQ25CLHdCQURtQixDQUloQixJQUpnQixHQUlULHVEQUpTO0FBQ25CLHdCQURtQixDQUtoQixNQUxnQixHQUtQLENBQ2QsV0FBVyxtQkFBWCxFQUFnQyxTQUFoQyxFQUEyQyxTQUEzQyxDQURjLEVBRWQsa0JBQWtCLGVBQWxCLEVBQW1DLEtBQW5DLEVBQTBDLFFBQTFDLENBRmMsQ0FMTztBQXlCekIsNEJBQTBCLHNCQUExQjtBQUNELENBMUJBLEVBQUQiLCJmaWxlIjoiTGlua0hlYWRlckR5bmFtaWNWYWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnNlTGlua0hlYWRlciA9IChoZWFkZXIpID0+IGhlYWRlci5zcGxpdCgnLCcpXG4gIC5yZWR1Y2UoKGxpbmtzLCBwYXJ0KSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHBhcnQuc3BsaXQoJzsnKVxuXG4gICAgaWYgKHNlY3Rpb24ubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIGxpbmtzXG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gc2VjdGlvblswXS5yZXBsYWNlKC88KC4qKT4vLCAnJDEnKS50cmltKClcbiAgICBjb25zdCByZWwgPSBzZWN0aW9uWzFdLnJlcGxhY2UoL3JlbD1cIiguKilcIi8sICckMScpLnRyaW0oKVxuXG4gICAgbGlua3NbcmVsXSA9IHVybFxuXG4gICAgcmV0dXJuIGxpbmtzXG4gIH0sIHt9KVxuXG5+KGZ1bmN0aW9uIHBhd0V4dGVuc2lvbiAoKSB7XG4gIGNsYXNzIExpbmtIZWFkZXJEeW5hbWljVmFsdWUge1xuICAgIHN0YXRpYyBpZGVudGlmaWVyID0gJ2NvbS5rdXJ0c2Nod2Fyei5QYXdFeHRlbnNpb25zLkxpbmtIZWFkZXJEeW5hbWljVmFsdWUnXG4gICAgc3RhdGljIHRpdGxlID0gJ0xpbmsgSGVhZGVyJ1xuICAgIHN0YXRpYyBoZWxwID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9rdXJ0c2Nod2Fyei9wYXctbGluay1oZWFkZXIvaXNzdWVzJ1xuICAgIHN0YXRpYyBpbnB1dHMgPSBbXG4gICAgICBJbnB1dEZpZWxkKCdsaW5rSGVhZGVyUmVxdWVzdCcsICdSZXF1ZXN0JywgJ1JlcXVlc3QnKSxcbiAgICAgIER5bmFtaWNWYWx1ZUlucHV0KCdsaW5rSGVhZGVyUmVsJywgJ1JlbCcsICdTdHJpbmcnKSxcbiAgICBdXG5cbiAgICBldmFsdWF0ZSAoY3R4KSB7XG4gICAgICBsZXQgbGFzdEV4Y2hhbmdlID0gdGhpcy5saW5rSGVhZGVyUmVxdWVzdC5nZXRMYXN0RXhjaGFuZ2UoKVxuXG4gICAgICBpZiAobGFzdEV4Y2hhbmdlICYmIGxhc3RFeGNoYW5nZS5yZXNwb25zZUhlYWRlcnMgJiYgbGFzdEV4Y2hhbmdlLnJlc3BvbnNlSGVhZGVyc1snTGluayddKSB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gcGFyc2VMaW5rSGVhZGVyKGxhc3RFeGNoYW5nZS5yZXNwb25zZUhlYWRlcnNbJ0xpbmsnXSB8fCAnJylcblxuICAgICAgICBpZiAobGlua3MuaGFzT3duUHJvcGVydHkodGhpcy5saW5rSGVhZGVyUmVsKSkge1xuICAgICAgICAgIHJldHVybiBsaW5rc1t0aGlzLmxpbmtIZWFkZXJSZWxdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJEeW5hbWljVmFsdWVDbGFzcyhMaW5rSGVhZGVyRHluYW1pY1ZhbHVlKVxufSkoKVxuIl19